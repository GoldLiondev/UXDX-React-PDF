import React, { Component } from "react";
import styles from "./customOption.style";
import { View, Text } from "@react-pdf/renderer";
import { Remarkable } from "remarkable";
import ReactHtmlParser from "html-react-parser";
import isEmpty from "../../utils/isEmpty";
import "./description.style.css";
const getReactPDFCom = (htmlElement) => {
  if (typeof htmlElement === "string") {
    const type = htmlElement.type;
    return parseEelemnt(
      type,
      (data) => {
        return data;
      },
      htmlElement
    );
  } else if (typeof htmlElement === "object" && !isEmpty(htmlElement)) {
    const type = htmlElement.type;
    if (isEmpty(type)) {
      htmlElement = htmlElement.map((content) => {
        return getReactPDFCom(content);
      });
      return htmlElement;
    } else {
      if (isEmpty(htmlElement.props)) {
        return parseEelemnt(type, getReactPDFCom, "");
      } else {
        if (isEmpty(htmlElement.props.children)) {
          return parseEelemnt(
            type,
            (data) => {
              return data;
            },
            ""
          );
        } else {
          return parseEelemnt(type, getReactPDFCom, htmlElement.props.children);
        }
      }
    }
  }
};
const parseEelemnt = (type, contentfunc, content) => {
  switch (type) {
    case "p":
      return <Text style={styles.markdownP}>{contentfunc(content)}</Text>;
    case "ol":
      return <View style={styles.markdownOl}>{contentfunc(content)}</View>;
    case "ul":
      return <View style={styles.markdownUl}>{contentfunc(content)}</View>;
    case "li":
      return <Text style={styles.markdownLi}>- {contentfunc(content)}</Text>;
    case "h1":
      return <Text style={styles.markdownH1}>{contentfunc(content)}</Text>;
    case "h2":
      return <Text style={styles.markdownH2}>{contentfunc(content)}</Text>;
    case "h3":
      return <Text style={styles.markdownH3}>{contentfunc(content)}</Text>;
    case "blockquote":
      return (
        <Text
          style={styles.markdownBlockquote}
          class="blockquote"
          className="blockquote"
        >
          {'"'}
          {contentfunc(content)}
          {'"'}
        </Text>
      );
    case "em":
      return <Text style={styles.markdownEm}>{contentfunc(content)}</Text>;
    case "strong":
      return <Text style={styles.markdownStrong}>{contentfunc(content)}</Text>;
    case "del":
      return <Text style={styles.markdownDel}>{contentfunc(content)}</Text>;
    case "br":
      return <Text style={styles.markdownBr}>{contentfunc(content)}</Text>;
    default:
      return <Text>{contentfunc(content)}</Text>;
  }
};
const htmlParser = (markdown) => {
  if (markdown) {
    const md = new Remarkable({ breaks: true });
    let htmlString = md.render(markdown);
    // htmlString = htmlString.replace(/\n/g, "");
    const parsedHtml = ReactHtmlParser(htmlString);
    return getReactPDFCom(parsedHtml);
  } else {
    return <Text> </Text>;
  }
};
export default class Element extends Component {
  componentDidMount() {}
  render() {
    const { data } = this.props;
    return (
      <View style={{ width: "1000px", height: "1000px" }}>
        {htmlParser(data)}
      </View>
    );
  }
}
