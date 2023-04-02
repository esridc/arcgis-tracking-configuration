/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CookieConfig } from "./utils/telemetry-config";
export namespace Components {
    interface ArcgisTrackingConfiguration {
    }
    interface ArcgisTrackingOption {
    }
    interface ArcgisTrackingPopup {
    }
    interface ArcgisTrackingSidebar {
        "cookieConfig": CookieConfig;
        "open": boolean;
    }
}
export interface ArcgisTrackingPopupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLArcgisTrackingPopupElement;
}
export interface ArcgisTrackingSidebarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLArcgisTrackingSidebarElement;
}
declare global {
    interface HTMLArcgisTrackingConfigurationElement extends Components.ArcgisTrackingConfiguration, HTMLStencilElement {
    }
    var HTMLArcgisTrackingConfigurationElement: {
        prototype: HTMLArcgisTrackingConfigurationElement;
        new (): HTMLArcgisTrackingConfigurationElement;
    };
    interface HTMLArcgisTrackingOptionElement extends Components.ArcgisTrackingOption, HTMLStencilElement {
    }
    var HTMLArcgisTrackingOptionElement: {
        prototype: HTMLArcgisTrackingOptionElement;
        new (): HTMLArcgisTrackingOptionElement;
    };
    interface HTMLArcgisTrackingPopupElement extends Components.ArcgisTrackingPopup, HTMLStencilElement {
    }
    var HTMLArcgisTrackingPopupElement: {
        prototype: HTMLArcgisTrackingPopupElement;
        new (): HTMLArcgisTrackingPopupElement;
    };
    interface HTMLArcgisTrackingSidebarElement extends Components.ArcgisTrackingSidebar, HTMLStencilElement {
    }
    var HTMLArcgisTrackingSidebarElement: {
        prototype: HTMLArcgisTrackingSidebarElement;
        new (): HTMLArcgisTrackingSidebarElement;
    };
    interface HTMLElementTagNameMap {
        "arcgis-tracking-configuration": HTMLArcgisTrackingConfigurationElement;
        "arcgis-tracking-option": HTMLArcgisTrackingOptionElement;
        "arcgis-tracking-popup": HTMLArcgisTrackingPopupElement;
        "arcgis-tracking-sidebar": HTMLArcgisTrackingSidebarElement;
    }
}
declare namespace LocalJSX {
    interface ArcgisTrackingConfiguration {
    }
    interface ArcgisTrackingOption {
    }
    interface ArcgisTrackingPopup {
        "onOpenTelementrySettings"?: (event: ArcgisTrackingPopupCustomEvent<any>) => void;
        "onSetTelemetryConfig"?: (event: ArcgisTrackingPopupCustomEvent<CookieConfig>) => void;
    }
    interface ArcgisTrackingSidebar {
        "cookieConfig"?: CookieConfig;
        "onSetTelemetryConfig"?: (event: ArcgisTrackingSidebarCustomEvent<CookieConfig>) => void;
        "open"?: boolean;
    }
    interface IntrinsicElements {
        "arcgis-tracking-configuration": ArcgisTrackingConfiguration;
        "arcgis-tracking-option": ArcgisTrackingOption;
        "arcgis-tracking-popup": ArcgisTrackingPopup;
        "arcgis-tracking-sidebar": ArcgisTrackingSidebar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "arcgis-tracking-configuration": LocalJSX.ArcgisTrackingConfiguration & JSXBase.HTMLAttributes<HTMLArcgisTrackingConfigurationElement>;
            "arcgis-tracking-option": LocalJSX.ArcgisTrackingOption & JSXBase.HTMLAttributes<HTMLArcgisTrackingOptionElement>;
            "arcgis-tracking-popup": LocalJSX.ArcgisTrackingPopup & JSXBase.HTMLAttributes<HTMLArcgisTrackingPopupElement>;
            "arcgis-tracking-sidebar": LocalJSX.ArcgisTrackingSidebar & JSXBase.HTMLAttributes<HTMLArcgisTrackingSidebarElement>;
        }
    }
}
