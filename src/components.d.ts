/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface JkaAmbulanceWlApp {
        "basePath": string;
    }
    interface JkaAmbulanceWlEditor {
        "entryId": string;
    }
    interface JkaAmbulanceWlList {
    }
}
export interface JkaAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLJkaAmbulanceWlEditorElement;
}
export interface JkaAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLJkaAmbulanceWlListElement;
}
declare global {
    interface HTMLJkaAmbulanceWlAppElement extends Components.JkaAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLJkaAmbulanceWlAppElement: {
        prototype: HTMLJkaAmbulanceWlAppElement;
        new (): HTMLJkaAmbulanceWlAppElement;
    };
    interface HTMLJkaAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLJkaAmbulanceWlEditorElement extends Components.JkaAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLJkaAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLJkaAmbulanceWlEditorElement, ev: JkaAmbulanceWlEditorCustomEvent<HTMLJkaAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLJkaAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLJkaAmbulanceWlEditorElement, ev: JkaAmbulanceWlEditorCustomEvent<HTMLJkaAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLJkaAmbulanceWlEditorElement: {
        prototype: HTMLJkaAmbulanceWlEditorElement;
        new (): HTMLJkaAmbulanceWlEditorElement;
    };
    interface HTMLJkaAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLJkaAmbulanceWlListElement extends Components.JkaAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLJkaAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLJkaAmbulanceWlListElement, ev: JkaAmbulanceWlListCustomEvent<HTMLJkaAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLJkaAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLJkaAmbulanceWlListElement, ev: JkaAmbulanceWlListCustomEvent<HTMLJkaAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLJkaAmbulanceWlListElement: {
        prototype: HTMLJkaAmbulanceWlListElement;
        new (): HTMLJkaAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "jka-ambulance-wl-app": HTMLJkaAmbulanceWlAppElement;
        "jka-ambulance-wl-editor": HTMLJkaAmbulanceWlEditorElement;
        "jka-ambulance-wl-list": HTMLJkaAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface JkaAmbulanceWlApp {
        "basePath"?: string;
    }
    interface JkaAmbulanceWlEditor {
        "entryId"?: string;
        "onEditor-closed"?: (event: JkaAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface JkaAmbulanceWlList {
        "onEntry-clicked"?: (event: JkaAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "jka-ambulance-wl-app": JkaAmbulanceWlApp;
        "jka-ambulance-wl-editor": JkaAmbulanceWlEditor;
        "jka-ambulance-wl-list": JkaAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "jka-ambulance-wl-app": LocalJSX.JkaAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLJkaAmbulanceWlAppElement>;
            "jka-ambulance-wl-editor": LocalJSX.JkaAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLJkaAmbulanceWlEditorElement>;
            "jka-ambulance-wl-list": LocalJSX.JkaAmbulanceWlList & JSXBase.HTMLAttributes<HTMLJkaAmbulanceWlListElement>;
        }
    }
}
