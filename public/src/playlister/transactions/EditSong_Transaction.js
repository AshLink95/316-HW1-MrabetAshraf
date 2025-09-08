import { jsTPS_Transaction } from '../../jstps/index.js'

/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    /**
     * Initializes this object such that it can both do and undo the transaction
     * 
     * @param {PlaylisterModel} initModel The M in MVC for this app
     * @param {number} currSong The song to be edited
     * @param {string} newTitle The new title in the song to be edited
     * @param {number} newYear The new year in the song to be edited
     * @param {string} newArtist The new artist in the song to be edited
     * @param {string} newYoutubeId The new YouTube ID in the song to be edited
     */
    constructor(initModel, currSong, newTitle, newYear, newArtist, newYouTubeId) {
        super();
        this.model = initModel;
        this.song = currSong;

        this.oldTitle = this.song.title;
        this.oldYear = this.song.year;
        this.oldArtist = this.song.artist;
        this.oldYouTubeId = this.song.youTubeId;

        this.newTitle = newTitle;
        this.newYear = newYear;
        this.newArtist = newArtist;
        this.newYouTubeId = newYouTubeId;
    }

    /**
     * Executed when this transaction is first done or redone.
     */
    doTransaction() {
        this.model.editSong(this.song, this.newTitle, this.newYear, this.newArtist, this.newYouTubeId);
    }

    /**
     * Executed when this transaction is undone.
     */
    undoTransaction() {
        this.model.editSong(this.song, this.oldTitle, this.oldYear, this.oldArtist, this.oldYouTubeId);
    }
}
