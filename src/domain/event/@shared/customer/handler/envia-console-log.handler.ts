import EventHandlerInterface from "../../event-handler.interface";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

export default class EnviaConsoleLogHandler implements EventHandlerInterface{
    handle(event: CustomerAddressChangedEvent): void {
        var customer = event.eventData;
        console.log(`Endereço do cliente: ${customer.id}, ${customer.nome} alterado para: ${customer.address.toString()}`);
    }
}