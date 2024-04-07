const executeSELECTQuery = require('../../src/index');

test('Execute SQL Query', async () => {
    const query = 'SELECT id, name FROM sample';
    const result = await executeSELECTQuery(query);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('name');


});
