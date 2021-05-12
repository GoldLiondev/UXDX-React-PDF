import React, { Component } from "react";
import { Text, View } from "@react-pdf/renderer";
import isEmpty from "../../utils/isEmpty";
import { calcS } from "../../utils/calcSize";
import chooseStyle from "./customTable.style";
export default class CustomTable extends Component {
  render() {
    const { data, headerdata, width, height, styletype } = this.props;
    const { field, filter, widthRate } = headerdata;
    const customStyle = chooseStyle(isEmpty(styletype) ? false : styletype);
    const tablewidth = isEmpty(width) ? 1800 : width;
    const rowheight = isEmpty(height) ? 100 : height;

    let tempFilter = "";
    if (isEmpty(field) || isEmpty(data)) {
      return <Text>Your Data is empty</Text>;
    } else {
      return (
        <View
          style={[
            {
              width: calcS(tablewidth),
              flexDirection: "column",
            },
            customStyle.ViewStyle,
          ]}
        >
          {/* This is whole Table */}
          <View
            style={{
              width: calcS(tablewidth),
              height: calcS(rowheight),
              flexDirection: "row",
            }}
          >
            {/* This is Tr Tag */}

            {field.map((titleIndex, thIndex) => (
              <View
                key={"Th" + thIndex}
                style={[
                  {
                    width: calcS(tablewidth * widthRate[thIndex]),
                    height: calcS(rowheight),
                    padding: calcS(10),
                  },
                  customStyle.TableHeader,
                ]}
              >
                {/* This is th tag of header */}
                {headerdata[titleIndex].title(
                  calcS(tablewidth * widthRate[thIndex]),
                  calcS(rowheight)
                )}
              </View>
            ))}
          </View>
          {data.map((rowitem, trIndex) => (
            <View
              key={"tr" + trIndex}
              style={[
                {
                  width: calcS(tablewidth),
                  height: calcS(rowheight),
                  flexDirection: "row",
                },
                customStyle.trStyle,
              ]}
            >
              {/* This is tr tag of Body */}
              {field.map((fileditem, tdIndex) => {
                return (
                  <View
                    key={"tbody td " + tdIndex}
                    style={[
                      {
                        padding: calcS(10),
                        width: calcS(tablewidth * widthRate[tdIndex]),
                        height: calcS(rowheight),
                      },
                      customStyle.tdStyle,
                    ]}
                  >
                    {/* This is td tag of Body */}
                    <Text
                      style={{
                        padding: calcS(20),
                        ...headerdata[fileditem].style,
                      }}
                    >
                      {headerdata[fileditem].value(
                        fileditem === filter
                          ? tempFilter === rowitem.data[fileditem]
                            ? ""
                            : (tempFilter =
                                rowitem.data[fileditem] &&
                                rowitem.data[fileditem])
                          : rowitem.data[fileditem],
                        rowitem.data
                      )}
                    </Text>
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      );
    }
  }
}
