import { expect } from 'chai';
import sequelize from '../../../config/db.config.js';
import temperament from '../../../models/temperament.js';

describe('temperament model', () => {
	before(() =>
		sequelize.authenticate().catch((err) => {
			throw new Error('Unable to connect to the database:', err);
		})
	);

	describe('validate attributes', async () => {
		let model;

		beforeEach(async () => {
			model = await temperament.create({
				name: 'Watchful',
			});
		});

		describe('dataTypes id', () => {
			beforeEach(() => temperament.sync({ force: true }));

			it('should not have a null ID value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.id')
					.to.not.be.a('null');
			});

			it('should the ID be of type number', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.id')
					.to.be.a('number');
			});
		});

		describe('dataTypes name', () => {
			beforeEach(() => temperament.sync({ force: true }));

			it('should not have a null NAME value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.name')
					.to.not.be.a('null');
			});

			it('should the ID be of type "string"', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.name')
					.to.be.a('string');
			});
		});
	});
});