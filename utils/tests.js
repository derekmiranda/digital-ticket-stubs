import db from '../models';

export const dbSetup = (test) => {
  test.beforeEach('Initialize db', async t => {
    await db.syncPromise();
  })
  
  test.afterEach(async t => {
    // clear database for next test
    await db.sequelize.sync({ force: true });
  })
  
}