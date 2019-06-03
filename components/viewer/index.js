import React, { PureComponent } from 'react';

import { embedpano, removepano } from './krpano';

class Canvas extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    embedpano({
      xml: null,
      target: 'mainCanvas',
      html5: 'only',
      id: 'krpanoViewer',
      mobilescale: 1.0,
      passQueryParameters: false,
      onready(krpano) {
        const xmlstring = String.raw`
          <krpano>
              <autorotate enabled="true"
                          waittime="0.5"
                          speed="10.0"
                          />
                  <image>
                          <right url="https://ezhome-prod-render-assets.oss-cn-beijing.aliyuncs.com/floorplan/render/images/2019-3-29/325c0d27-60e2-4e48-924f-b9e6c876cf37/8fd26647-ee6c-485d-bbce-1ddb2ee3c419.right.jpg"/>
                          <left url="https://ezhome-prod-render-assets.oss-cn-beijing.aliyuncs.com/floorplan/render/images/2019-3-29/325c0d27-60e2-4e48-924f-b9e6c876cf37/8fd26647-ee6c-485d-bbce-1ddb2ee3c419.left.jpg"/>
                          <up url="https://ezhome-prod-render-assets.oss-cn-beijing.aliyuncs.com/floorplan/render/images/2019-3-29/325c0d27-60e2-4e48-924f-b9e6c876cf37/8fd26647-ee6c-485d-bbce-1ddb2ee3c419.top.jpg"/>
                          <down url="https://ezhome-prod-render-assets.oss-cn-beijing.aliyuncs.com/floorplan/render/images/2019-3-29/325c0d27-60e2-4e48-924f-b9e6c876cf37/8fd26647-ee6c-485d-bbce-1ddb2ee3c419.bottom.jpg"/>
                          <back url="https://ezhome-prod-render-assets.oss-cn-beijing.aliyuncs.com/floorplan/render/images/2019-3-29/325c0d27-60e2-4e48-924f-b9e6c876cf37/8fd26647-ee6c-485d-bbce-1ddb2ee3c419.back.jpg"/>
                          <front url="https://ezhome-prod-render-assets.oss-cn-beijing.aliyuncs.com/floorplan/render/images/2019-3-29/325c0d27-60e2-4e48-924f-b9e6c876cf37/8fd26647-ee6c-485d-bbce-1ddb2ee3c419.front.jpg"/>
                  </image>
          </krpano>`;
        console.log(xmlstring);
        krpano.call(`loadxml(${xmlstring}, null, MERGE, BLEND(0.5));`);
      },
    });
  }

  componentWillUnmount() {
    removepano('krpanoViewer');
  }

  render() {
    return (
      <div
        id="mainCanvas"
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
        }}
      />
    );
  }
}

export default Canvas;
