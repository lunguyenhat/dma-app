/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import React from 'react';

import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Image as ComponentImage } from 'aesirx-uikit';

class MediaDataRender extends React.Component {
  // canvaEditHandler = (index, id) => {
  //   this.props.onSetCanvaIndexToEdit(index, id);
  // };

  // canvaDeleteHandler = (index) => {
  //   this.props.canvaDeleteItem(index);
  // };

  render() {
    const { damData, deleteDamItem } = this.props;
    // const { canvaEditHandler, canvaDeleteHandler } = this;
    const imageData = damData.filter((data) => !['mp4', 'mov'].includes(data.file_extension));
    const videoData = damData.filter((data) => ['mp4', 'mov'].includes(data.file_extension));
    return (
      <div className="d-flex">
        {/* {canvaData.map((canvaAsset, index) => (
          <div
            key={canvaAsset.designId}
            className="item_dam_assets justify-content-start border-top mt-4"
          >
            <div className="position-relative w-50 m-2 wr_img_thumbnail_canva">
              <div className="">
                <span className="fa-pull-right">
                  <span
                    className="cursor-pointer m-2"
                    onClick={() => canvaEditHandler(index, canvaAsset.designId)}
                  >
                    <i>
                      <FontAwesomeIcon icon={faEdit} />
                    </i>
                  </span>
                  <span
                    className="cursor-pointer text-red-1"
                    onClick={() => canvaDeleteHandler(canvaAsset.designId)}
                  >
                    <i>
                      <FontAwesomeIcon icon={faTimes} />
                    </i>
                  </span>
                </span>
              </div>
              <ComponentImage
                className={`img-thumbnail rounded imgTab`}
                alt={canvaAsset.exportUrl}
                src={canvaAsset.exportUrl}
              />
            </div>
          </div>
        ))} */}

        {imageData.map((damAsset, index) => (
          <div key={index} className="item_dam_assets justify-content-start border-top mt-4">
            <div className="position-relative m-2 group-bg-img-thumbnail">
              <div>
                <span className="fa-pull-right group-cursor-pointer">
                  <span
                    className="cursor-pointer text-red-1"
                    onClick={() => deleteDamItem(damAsset.id)}
                  >
                    <i>
                      <FontAwesomeIcon icon={faTimes} />
                    </i>
                  </span>
                </span>
              </div>

              {/* <ComponentImage
                className={`imgTab object-fit-contain bg-white rounded-3`}
                width={100}
                height={100}
                alt={damAsset?.url ?? damAsset?.download_url}
                src={
                  damAsset?.file_extension === 'pdf'
                    ? '/assets/images/default_digital_asset.svg'
                    : damAsset?.url ?? damAsset?.download_url
                }
              ></ComponentImage> */}
              <ComponentImage
                className={`imgTab object-fit-contain bg-white rounded-3`}
                width={100}
                height={100}
                alt={damAsset?.url ?? damAsset?.download_url}
                src={
                  damAsset?.file_extension === 'pdf'
                    ? '/assets/images/default_digital_asset.svg'
                    : damAsset?.url ?? damAsset?.download_url
                }
                style={{
                  padding: damAsset?.file_extension === 'pdf' ? '29px 28px' : '0', // Padding cho file PDF và các tệp khác
                }}
              ></ComponentImage>
            </div>
          </div>
        ))}

        {videoData && (
          <div>
            {videoData.map((value, index) => {
              return (
                <div key={index} className="item_dam_assets justify-content-start border-top mt-4">
                  <div className="position-relative m-2 w-260">
                    <div>
                      <span className="fa-pull-right">
                        <span
                          className="cursor-pointer text-red-1"
                          onClick={() => deleteDamItem(value.id)}
                        >
                          <i>
                            <FontAwesomeIcon icon={faTimes} />
                          </i>
                        </span>
                      </span>
                    </div>
                    <video width="260" controls>
                      <source src={value?.url ?? value?.download_url} type="video/mp4" />
                      <source src={value?.url ?? value?.download_url} type="video/mov" />
                      This vide does not support this video.
                    </video>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default MediaDataRender;
