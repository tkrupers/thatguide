export default class stepApi {
  static async newStep(payload) {
    await fetch(`/new-step`, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(result => result.json());
  }
}