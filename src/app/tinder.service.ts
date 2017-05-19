import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

interface MovieList {
    id: number,
    title: string,
    rating: number,
    imageUrl: string,
    summary: string,
    visible: boolean
}

@Injectable()
export class TinderService {

    private _url = '/recommendations/';

    private _movieList: MovieList[] = [
        {
            id: 11,
            title: 'Star Wars: Episode VII - The Force Awakens',
            rating: 8.6,
            imageUrl: 'http://lorempixel.com/300/200/abstract/1',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid animi consequatur, culpa cum distinctio earum eius error, eum expedita harum itaque labore mollitia, nobis optio quos sequi similique vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid animi consequatur, culpa cum distinctio earum eius error, eum expedita harum itaque labore mollitia, nobis optio quos sequi similique vitae.',
            visible: true
        },
        {
            id: 22,
            title: 'Pulp Fiction',
            rating: 9.1,
            imageUrl: 'http://lorempixel.com/300/200/abstract/2',
            summary: 'Amet consequatur debitis dignissimos eius et fugit in, magnam magni nemo nesciunt officiis provident quae quibusdam reiciendis repellendus velit voluptatibus. Consectetur cum doloremque eum nihil quos ratione repudiandae sapiente sit.',
            visible: false
        },
        {
            id: 33,
            title: 'Eurotrip',
            rating: 7.9,
            imageUrl: 'http://lorempixel.com/300/200/abstract/3',
            summary: 'Adipisci amet beatae, consequatur delectus dicta distinctio, eos explicabo facilis harum illo, illum iusto laboriosam magnam magni maiores molestiae nihil obcaecati quae quam quisquam reiciendis repellendus sed sit sunt unde!',
            visible: false
        },
        {
            id: 44,
            title: 'The Transporter',
            rating: 7.5,
            imageUrl: 'http://lorempixel.com/300/200/abstract/4',
            summary: 'Asperiores aut corporis cum delectus deleniti dignissimos dolore esse et id illo iusto magnam maiores nam nihil nostrum officia pariatur quo rem sunt velit veritatis vero, voluptatem? Minima, officiis quaerat!',
            visible: false
        },

    ];

    constructor(private _http: Http) {
    }

    getMovieList(): Observable<MovieList[]> {
        return Observable.create( (observer) => {
           observer.next(this._movieList);
        }).delay(2000); // just to demonstrate beautiful loader
    }

    updateMovieList(id: number, action: string): Observable<string> {
        const body = JSON.stringify('blablabla');
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});

        return this._http.put(this._url + id + '/' + action, body, options)
            .map( res => res.json() );
    }

}
