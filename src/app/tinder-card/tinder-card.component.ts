import {Component, Input, OnInit} from '@angular/core';
import {TinderService} from '../tinder.service';

@Component({
    selector: 'app-tinder-card',
    templateUrl: './tinder-card.component.html',
    styleUrls: ['./tinder-card.component.scss']
})
export class TinderCardComponent implements OnInit {

    public isLoaderVisible = true;
    @Input() public maxScore = 10;

    private _movieList = [];
    private _swipeAction = {
        left: 'swipeleft',
        right: 'swiperight'
    };
    private _nextIndex = 0;

    constructor(private _tinderService: TinderService) {
    }

    ngOnInit() {
        this._tinderService.getMovieList()
            .subscribe( (movieList) => {
                this.isLoaderVisible = false;
                this._movieList = movieList;
            });
    }

    onAccept(id: number) {
        this._tinderService.updateMovieList(id, 'accept')
            .subscribe(
                data => console.log('ok'),
                error => console.error('error')
            );
    }

    onReject(id: number, currentIndex: number) {
        this._tinderService.updateMovieList(id, 'reject')
            .subscribe(
                data => console.log('ok'),
                error => console.error('error')
            );
        this.nextCard(currentIndex);
    }

    onSwipe(currentIndex: number) {
        if (currentIndex > this._movieList.length || currentIndex < 0) return;
        this.nextCard(currentIndex);
    }

    nextCard(currentIndex: number) {
        const isLast = currentIndex === this._movieList.length - 1;
        this._nextIndex = isLast ? 0 : currentIndex + 1;
        // set visibility
        this._movieList.forEach((el, i) => el.visible = (i === this._nextIndex));
    }
}
