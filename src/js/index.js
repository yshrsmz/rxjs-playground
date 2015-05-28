'use strict';

import Rx from 'rx';
import $ from 'jquery';


document.addEventListener('DOMContentLoaded', () => {
    // let suggestionsEl = document.getElementById('js-suggestions');
    // let refreshClickStream = Rx.Observable.fromEvent(document.querySelector('.refresh'), 'click');

    // let close1ClickStream = Rx.Observable.fromEvent(document.getElementById('js-close1'), 'click');

    // let requestStream = refreshClickStream
    //     .startWith('initial click')
    //     .map((e) => {
    //         console.log(e);
    //         let randomOffset = Math.floor(Math.random() * 500);
    //         return `https://api.github.com/users?access_token=aa25e7e5c6fc393cf801fc36141e632a3694b16e&since=${randomOffset}`;
    //     });

    // let onSuggestion = function(suggestion) {
    //     console.log('suggestion', suggestion);
    //     if (!suggestion) {
    //         suggestionsEl.innerHTML = '';
    //         return;
    //     }

    //     suggestionsEl.innerHTML += `<li>${suggestion.login}</li>`;
    // }

    // let responseStream = requestStream
    //     .flatMap((requestUrl) => {
    //         console.log(requestUrl);
    //         return Rx.Observable.fromPromise($.getJSON(requestUrl))
    //     });

    // let suggestion1Stream = close1ClickStream
    //     .startWith('initial click')
    //     .combineLatest(responseStream, (click, users) => users[Math.floor(Math.random() * users.length)])
    //     .merge(refreshClickStream.map(() => null))
    //     .startWith(null);

    // let suggestion2Stream = close1ClickStream
    //     .startWith('initial click')
    //     .combineLatest(responseStream, (click, users) => users[Math.floor(Math.random() * users.length)])
    //     .merge(refreshClickStream.map(() => null))
    //     .startWith(null);

    // let suggestion3Stream = close1ClickStream
    //     .startWith('initial click')
    //     .combineLatest(responseStream, (click, users) => users[Math.floor(Math.random() * users.length)])
    //     .merge(refreshClickStream.map(() => null))
    //     .startWith(null);

    // suggestion1Stream.subscribe(onSuggestion);
    // suggestion2Stream.subscribe(onSuggestion);
    // suggestion3Stream.subscribe(onSuggestion);

    Rx.Observable.from(['a', 'b', 'c'])
        .map((item) => item.toUpperCase())
        //.flatMap((item) => { return Rx.Observable.just({item: item})})
        .subscribe((item) => console.log(item));

});