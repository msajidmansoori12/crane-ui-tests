import { login } from "../../utils/utils";
import { noVerifyCopyPlanData, verifyCopyPlanData, directPvPlanData, verifyCopydirectPvPlan,
    directImagePlanData, directImagePvPlan, indirectMultipleProjects, directMultipleProjects, changeTargetNamespace,
    IndirectChangeTargetNamespace } from './cluster_config';
const configurationScript = "cypress/utils/configuration_script.sh"
const targetCluster = Cypress.env('targetCluster');
describe('Log In', () => {

    it('Login to MTC UI', () => {
        console.log('This is target : ',targetCluster)
        cy.exec(`"${configurationScript}" setup_target_cluster ${directImagePlanData.namespaceList} "${targetCluster}"`, { timeout: 200000,log:true }).then((res)=>{
            console.log(res.stdout)
        })
        login();
        
        
        // Assert that home page has loaded after login
        cy.get('h1').should('contain', 'Migration Toolkit for Containers')
    });
});
