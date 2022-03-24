import EventInterface from "../event.interface";

export default class ProductCreatedEvent implements EventInterface{
    dataTimeOccurred: Date;
    eventData: any;

    constructor(eventData:any){
        this.eventData=eventData;
        this.dataTimeOccurred=new Date();
    }
}