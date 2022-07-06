import { Injectable } from "@angular/core";
import { ApiService } from "../services/api.service";
import { environment } from "src/environments/environment";
import { map, Observable, } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class Sports{
    url:string =environment.BASE_URL
    apiKey:string=environment.API_KEY

    constructor(private apiService:ApiService){}

    retrieveSportsRecords(queryString:string):Observable<any>{
        let url =`${this.url}?key=${this.apiKey}`
        url += queryString!=''?`&q=${queryString}` : ''
        
        return this.apiService.getApi(url).pipe(
            map((res:any)=>res))

        
    }
}