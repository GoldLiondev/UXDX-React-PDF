import React, { Component } from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./customStudies.style";
import Gallery from "../Gallery";
import SvgImage from "../SvgImage";
export default class CustomStudies extends Component {
  render() {
    return (
      <View>
        {this.props.maindata.map((value, key) => {
          return (
            <View key={key + 1} wrap={false}>
              <View style={styles.showtext}>
                <View>
                  <View style={styles.adobexdview} wrap={false}>
                    <Text style={styles.adobexd}>{value.data.Name}</Text>
                  </View>

                  <View style={styles.adobexdtextview}>
                    <Text style={styles.adobexdtext}>{value.data.Goal}</Text>
                  </View>
                  <View style={styles.whyuxdxview}>
                    <Text style={styles.whyuxdx}>Why UXDX</Text>
                  </View>
                  <View style={styles.whyuxdxtextview}>
                    <Text style={styles.whyuxdxtext}>
                      {value.data.Why_UXDX}
                    </Text>
                  </View>
                </View>

                <View style={styles.svglogoview}>
                  <SvgImage
                    marginTop={130}
                    width={500}
                    height={500}
                    url={value.data.Company_Logo[0].url}
                    style={styles.svglogo}
                    isImage={true}
                    isCase={true}
                  />
                </View>
              </View>
              <View style={styles.totalview}>
                <View style={styles.approachview} wrap={false}>
                  <View>
                    <Text style={styles.approach}>Approach</Text>
                  </View>
                  <View>
                    <Text style={styles.approachtext} wrap={false}>
                      {value.data.Approach}
                    </Text>
                  </View>
                </View>
                <View style={styles.outcomeview} wrap={false}>
                  <View>
                    <Text style={styles.outcome}>Outcome</Text>
                  </View>
                  <View>
                    <Text style={styles.outcometext}>{value.data.Outcome}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.imageview}>
                <Gallery
                  data={value.data.Gallery.raw}
                  cols={2}
                  width={1865}
                  imgHeight={563}
                  spacing={165}
                  mBottom={30}
                />
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
