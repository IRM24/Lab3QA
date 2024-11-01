import '../../node_modules/cypress-xpath'

import 'cypress-xpath';

describe('Busqueda de Propiedades en BN Venta de Bienes', function () {
    beforeEach(function () {

        cy.on('uncaught:exception', (err, runnable) => {
            // Devuelve false para prevenir que Cypress falle el test
            return false;
        });

        cy.visit('https://www.bnventadebienes.com/properties/search');
    });

    it('Seleccionar provincia - Heredia', () => {
        // Seleccionar la provincia de Alajuela en el dropdown de provincia
        cy.xpath("/html/body/div[3]/div[4]/form/div/div[1]/div[3]/div/select").select('Heredia');
    });

    it('Marcar opción de descuento', () => {
        // Marcar la opción de descuento
        cy.xpath("/html/body/div[3]/div[4]/form/div/div[2]/div[1]/div/div[2]/label").click();
    });

    it('Ingresar código de propiedad', () => {
        // Ingresar el código de propiedad "2404"
        cy.xpath("/html/body/div[3]/div[4]/form/div/div[1]/div[1]/div/input").type('2404');
    });

    it('Seleccionar estado de propiedad - Disponible', () => {
        // Seleccionar "Disponible" en el dropdown de estado de propiedad
        cy.xpath("/html/body/div[3]/div[4]/form/div/div[1]/div[11]/div/select").select('Disponible');
    });
});


