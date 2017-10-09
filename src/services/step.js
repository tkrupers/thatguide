export default class stepApi {
  static async newStep({id, payload}) {
    return await fetch(`/guide/${id}/new-step`, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(result => result.json());
  }
}