// interface example of how to be acceptable as an argument in
// addMarker function
export interface MarkerItem {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 3,
            center: {
                lat: 10,
                lng: 10
            }
     });
    }

    addMarker (markerItem: MarkerItem): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: markerItem.location.lat,
                lng: markerItem.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: markerItem.markerContent()
        });

        infoWindow.open(this.googleMap, marker);
    });
 }}