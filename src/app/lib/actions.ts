'use server'
import axios from "axios";

export async function createGame(formData: FormData) {

    const rawFormData = {
      name: formData.get('name'),
      state: formData.get('state'),
    };
    axios.post("http://localhost/new-next/back/", rawFormData)
      .then((response) => {
        console.log(response);
      });
  }