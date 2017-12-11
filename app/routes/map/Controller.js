import { Controller } from 'cx/ui';

export default class extends Controller {
    onInit() {
        this.store.init('$page.map', {
            center: {
                lat: 44.7722,
                lng: 17.1910,
            },
            zoom: 16
        });
    }
}