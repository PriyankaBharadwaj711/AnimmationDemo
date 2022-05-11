import { StringConstants } from "src/app/constants/string.constants"
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class HTTPService {
    constructor(
        private http: HttpClient,
        private router: Router,
    ) { }

    async fetchRequest(url: string, method: string, body?: any, operationFuction?: any, callOperationFunction?: boolean): Promise<any> {

        // Swal.fire({
        //     title: StringConstants.loadingTitle,
        //     text: StringConstants.loadingDescription,
        //     allowOutsideClick: false,
        // });

        // Swal.showLoading();

        // *GET, POST, PUT, DELETE,
        var options = {
            "mode": 'cors', // no-cors, *cors, same-origin
            "cache": 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            "credentials": 'same-origin', // include, *same-origin, omit
        }

        var headers = new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*")

        var header = {
            "content-type": "application/json",
        }

        // if (method !== 'GET') {
        //     options.body = JSON.stringify(body)
        // }

        return await this.http.request(
            method.trim(),
            url,
            {
                "headers": header,
                "params": options,
                "body": body,
            },
        ).toPromise().then((response: any) => {
            Swal.close();

            if (response.status == "SUCCESS") {
                return response;
            } else {
                // Swal.fire({
                //     title: StringConstants.serverErrorTitle,
                //     text: StringConstants.serverErrorDescription,
                //     confirmButtonText: "Reload",
                //     icon: 'error',
                // }).then(() => this.fetchRequest(url, method, body, operationFuction, callOperationFunction));
            }

        }, (error) => {
            console.log("Error", error);
            // Swal.close();

            // if (error.status == 500) {
            //     Swal.fire({
            //         title: StringConstants.serverErrorTitle,
            //         text: StringConstants.serverErrorDescription,
            //         confirmButtonText: "Reload",
            //         icon: 'error',
            //     }).then(() => this.fetchRequest(url, method, body, operationFuction, callOperationFunction));
            // } else {
            //     Swal.fire({
            //         title: StringConstants.networkErrorTitle,
            //         text: StringConstants.networkErrorDescription,
            //         confirmButtonText: "Okay",
            //         icon: 'error',
            //     }).then(() => this.router.navigateByUrl("/network-error"));
            // }
        })
    }
}
