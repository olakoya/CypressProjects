cy.fixture('userData.json').then((user) => {
  cy.login(user.username, user.password);
});
