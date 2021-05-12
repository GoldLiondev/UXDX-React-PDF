import React, { Component } from "react";
import { Text, View, Svg, Line, Image } from "@react-pdf/renderer";
import isEmpty from "../../utils/isEmpty";
import { calcS, isOdd } from "../../utils/calcSize";
import styles from "./customOption.style";
import Gallery from "../Gallery";
import Element from "./Element";

export default class index extends Component {
  render() {
    const { data, G_cols, G_width, G_imgHeight, G_spacing } = this.props;
    const GC_cols = isEmpty(G_cols) ? 3 : G_cols;
    const GC_width = isEmpty(G_width) ? 1800 : G_width;
    const GC_imgHeight = isEmpty(G_imgHeight) ? 100 : G_imgHeight;
    const GC_spacing = isEmpty(G_spacing) ? 20 : G_spacing;
    let tempFilter = "";

    if (isEmpty(data)) {
      return <Text>Your Data is empty</Text>;
    } else {
      return (
        <View>
          {data.map((item, index) => {
            return (
              <View style={styles.OptionView} key={index} wrap={false}>
                <View>
                  {tempFilter === item.data.Category ? (
                    <View style={{ height: "0px", width: "0px" }}></View>
                  ) : (tempFilter = item.data.Category) === "" ? (
                    <View style={{ height: "0px", width: "0px" }}></View>
                  ) : (
                    <Text style={styles.CategoryTitle}>
                      {item.data.Category}
                    </Text>
                  )}
                </View>
                <View style={styles.ContentView}>
                  {isOdd(index + 1) && (
                    <View>
                      <Image
                        style={
                          isOdd(index + 1)
                            ? styles.OddContentPicView
                            : styles.EvenContentPicView
                        }
                        src={item.data.Primary_Image.raw[0].url}
                        alt="images"
                      />
                    </View>
                  )}
                  <View
                    style={
                      isOdd(index + 1)
                        ? styles.OddDiscriptionView
                        : styles.EvenDiscriptionView
                    }
                  >
                    <Text style={styles.DiscriptionTitle}>
                      {item.data.Name}
                    </Text>
                    <View style={styles.DiscriptionData}>
                      <Element data={item.data.Description} />
                    </View>
                  </View>
                  {!isOdd(index + 1) && (
                    <View>
                      <Image
                        style={
                          isOdd(index + 1)
                            ? styles.OddContentPicView
                            : styles.EvenContentPicView
                        }
                        src={item.data.Primary_Image.raw[0].url}
                        alt="images"
                      />
                    </View>
                  )}
                </View>

                {!isEmpty(item.data.Gallery) && (
                  <View style={styles.GalleryView}>
                    <Gallery
                      cols={GC_cols}
                      data={item.data.Gallery}
                      width={GC_width}
                      imgHeight={GC_imgHeight}
                      spacing={GC_spacing}
                    />
                  </View>
                )}
                <View style={styles.HrView}>
                  <Svg height={calcS(10)} width={calcS(1902)}>
                    <Line
                      x1={calcS(0)}
                      y1={calcS(0)}
                      x2={calcS(1902)}
                      y2={calcS(0)}
                      strokeWidth={1}
                      stroke="rgb(0,0,0)"
                    />
                  </Svg>
                </View>
              </View>
            );
          })}
        </View>
      );
    }
  }
}
