import { Component, Host, Listen, Prop, State, h } from '@stencil/core';
import { CookieConfig, getCookieConfig, storeCookieConfig } from '../../utils/telemetry-config';

@Component({
  tag: 'arcgis-privacy-notice',
  styleUrl: 'arcgis-privacy-notice.css',
  shadow: true,
})
export class ArcgisPrivacyNotice {

  private privacyPopupEl;
  private privacySettingsEl;


  /**
   * Whether the notice is modal or footer
   */
  @Prop() view: "modal" | "popup" = "popup";

  @State() cookieConfig: CookieConfig = {};
  
  componentWillLoad() {
    this.cookieConfig = getCookieConfig();
  }
  render() {
    return (
      <Host>

        
      <arcgis-privacy-popup
        view={this.view}
        ref={(el) => this.privacyPopupEl = el}
      >
        <slot></slot>
      </arcgis-privacy-popup>
        <arcgis-privacy-settings 
          ref={(el) => this.privacySettingsEl = el}
          cookieConfig={this.cookieConfig}
        ></arcgis-privacy-settings>
      </Host>
    );
  }


  @Listen('openCookieDetails')
  openCookieDetails() {
    this.privacySettingsEl.open = true;   
    this.privacyPopupEl.open = false; 
  }

  @Listen('setCookieConfig')
  setCookieConfig(evt) {
    storeCookieConfig( evt.detail );

    this.privacySettingsEl.open = false;
    this.privacyPopupEl.open = false;
  }  

}
