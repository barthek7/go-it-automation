describe('QA Automation - zadanie testowe', () => {
  const emailField = '#user_email';
  const passwordField = '#user_password';
  const submitLoginBtn = 'button.eckniwg2';
  const welcomeMessage = 'main >div >div >div.css-1b6emrv';
  const goToCourseBtn = '.e10trvrj0';
  const homeworkBtn = '.css-1azh27c.eezalwr4 > a[href*="homework"]';
  const homeworkSection = '.css-rncbfg';
  const homeworkTextField = '.editor-class-name';
  const homeworkSubmitButton = 'button[type="submit"]';
  const homeworkConfirmMsg = '.css-ccl31m h3';

  it('Can submit homework', () => {
    cy.visit(' https://www.edu.goit.global/pl/account/login');
    cy.get(emailField).type('user888@gmail.com');
    cy.get(passwordField).type('1234567890');
    cy.get(submitLoginBtn).click();
    cy.url().should('contain', '/homepage');
    cy.get(welcomeMessage).should('have.text', 'Cześć, Тарас Шевченко !');
    cy.get(goToCourseBtn).should('have.text', 'Przejdź do kursu ').click();

    cy.get(homeworkBtn).click();
    cy.url().should('contain', '/homework');

    cy.get(homeworkSection).find(homeworkTextField).click();
    cy.get(homeworkSection)
      .find(homeworkSubmitButton)
      .should('not.have.property', 'disabled')
      .click();

    cy.get(homeworkConfirmMsg).should('have.text', 'Przesłałeś pracę domową');
  });
});
