class ListAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/notes'
  }

  getNotes() {
    return fetch(this.baseUrl).then(response => response.json())
  }

  // deleteNote(noteId) {
  //   const deleteUrl = `${this.baseUrl}/${noteId}`
  //   const noteDeleteParams = {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type':'application/json'
  //     }
  //   }
  //   return fetch(deleteUrl, noteDeleteParams).then(response => response.json())
  // }

  createNote(noteInfo) {

    const convertedNoteInfo = {
      title: noteInfo["title"],
      body: noteInfo["body"],
      est_hours: noteInfo["estHours"],
      due_date: noteInfo["dueDate"],
      location: noteInfo["location"],
      list_id: noteInfo["listId"]
    }

    const noteCreateParams = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(convertedNoteInfo)
    }

    return fetch(this.baseUrl, noteCreateParams).then(resp => resp.json())
  }

}