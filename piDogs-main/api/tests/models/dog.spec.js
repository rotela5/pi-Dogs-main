import { expect } from 'chai';
import sequelize from '../../../config/db.config.js';
import dog from '../../../models/dog.js';

describe('dog model', () => {
	before(() =>
		sequelize.authenticate().catch((err) => {
			throw new Error('Unable to connect to the database:', err);
		})
	);

	describe('validate attributes', async () => {
		let model;

		beforeEach(async () => {
			model = await dog.create({
				name: 'Affenpinscher',
				
				
					});
		});

		describe('dataTypes id', () => {
			beforeEach(() => dog.sync({ force: true }));

			it('should not have a null ID value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.id')
					.to.not.be.a('null');
			});

			it('should the ID be a valid UUID format', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.id')
					.to.have.lengthOf(36);
			});
		});

		describe('dataTypes name', () => {
			beforeEach(() => dog.sync({ force: true }));

			it('should not have a null NAME value', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.name')
					.to.not.be.a('null');
			});

			it('should the NAME be of type "string"', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.name')
					.that.is.a('string');
			});

			it('should the NAME have length max 128 and min 1', () => {
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.name')
					.to.have.lengthOf.above(1);
				expect(model)
					.to.have.ownPropertyDescriptor('dataValues')
					.to.have.nested.property('value.name')
					.to.have.lengthOf.below(128);
			});
		});

	
	});
});