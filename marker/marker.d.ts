import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { PopupService } from '../services/popup.service';
import { LeafletElement } from '../map/map';
import { LeafletGroup } from '../group/group';
export declare class MarkerElement {
    private mapService;
    private groupService;
    private popupService;
    private LeafletElement;
    private LeafletGroup;
    lat: number;
    lon: number;
    mouseover: string;
    onclick: string;
    iconUrl: string;
    constructor(mapService: MapService, groupService: GroupService, popupService: PopupService, LeafletElement?: LeafletElement, LeafletGroup?: LeafletGroup);
    ngOnInit(): void;
    createMarkerlayer(marker: any, map: any): void;
    imageExists(url: any, callback: any): void;
}
