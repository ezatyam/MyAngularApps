
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './register.model';
import { FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    formData: Register
    readonly rootUrl = "http://localhost:57388/api"
    constructor(private fb: FormBuilder, private http: HttpClient) { }
    FormData = this.fb.group({
        Id: [0],
        FirstName: [''],
        LastName: [''],
        Email: [''],
        Phone: [''],
        Password: [''],
        Gender: [''],
        SecurityQuestion: [0],
        Answer: ['']
    })

    register() {
        var body = {
            Id: this.FormData.value.Id,
            FirstName: this.FormData.value.FirstName,
            LastName: this.FormData.value.LastName,
            Email: this.FormData.value.Email,
            Phone: this.FormData.value.Phone,
            Password: this.FormData.value.Password,
            Gender: this.FormData.value.Gender,
            SecurityQuestion: this.FormData.value.SecurityQuestion,
            Answer: this.FormData.value.Answer
        };
        return this.http.post(this.rootUrl + "/Registration", body)
    }

    postRegisteration(formdata: Register) {
        return this.http.post(this.rootUrl+"/Registers", formdata)

    }
}
