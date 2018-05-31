import {
  List,
  InputItem,
  Switch,
  Stepper,
  Range,
  Button,
  Icon
} from "antd-mobile";

import { createForm } from "rc-form";

import React, { Component } from "react";
const Item = List.Item;
const Brief = Item.Brief;

class ListExample extends React.Component {
  state = {
    disabled: false
  };

  render() {
    return (
      <div>
        <List renderHeader={() => "Basic Style"} className="my-list">
          <Item extra={"extra content"}>Title</Item>
          <InputItem placeholder="请输入用户名" extra={<Icon type="right" />}>
            Name
          </InputItem>
        </List>
        <List renderHeader={() => "Subtitle"} className="my-list">
          <Item arrow="horizontal" multipleLine onClick={() => {}}>
            Title <Brief>subtitle</Brief>
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {}}
            platform="android"
          >
            ListItem （Android）<Brief>
              There may have water ripple effect of <br /> material if you set
              the click event.
            </Brief>
          </Item>
          <Item
            arrow="horizontal"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
            onClick={() => {}}
          >
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
        <List
          renderHeader={() =>
            "Customized Right Side（Empty Content / Text / Image）"
          }
          className="my-list"
        >
          <Item>Title</Item>
          <Item arrow="horizontal" onClick={() => {}}>
            Title
          </Item>
          <Item extra="extra content" arrow="horizontal" onClick={() => {}}>
            Title
          </Item>
          <Item
            extra="10:30"
            align="top"
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            multipleLine
          >
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
        <List renderHeader={() => "Align Vertical Center"} className="my-list">
          <Item multipleLine extra="extra content">
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
        <List renderHeader={() => "Icon in the left"}>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >
            My wallet
          </Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
            arrow="horizontal"
          >
            My Cost Ratio
          </Item>
        </List>
        <List renderHeader={() => "Text Wrapping"} className="my-list">
          <Item data-seed="logId">
            Single line，long text will be hidden with ellipsis；
          </Item>
          <Item wrap>
            Multiple line，long text will wrap；Long Text Long Text Long Text
            Long Text Long Text Long Text
          </Item>
          <Item extra="extra content" multipleLine align="top" wrap>
            Multiple line and long text will wrap. Long Text Long Text Long Text
          </Item>
          <Item extra="no arrow" arrow="empty" className="spe" wrap>
            In rare cases, the text of right side will wrap in the single line
            with long text. long text long text long text
          </Item>
        </List>
        <List renderHeader={() => "Other"} className="my-list">
          <Item
            disabled={this.state.disabled}
            extra=""
            onClick={() => {
              console.log("click", this.state.disabled);
              this.setState({ disabled: true });
            }}
          >
            Click to disable
          </Item>
          <Item>
            <select defaultValue="1">
              <option value="1">Html select element</option>
              <option value="2" disabled>
                Unable to select
              </option>
              <option value="3">option 3</option>
            </select>
          </Item>
        </List>

        <BasicInputWrapper />
      </div>
    );
  }
}

/**
 * 可输入的表格
 */
class BasicInput extends React.Component {
  state = {
    value: 1
  };
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, error => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        alert("Validation failed");
      }
    });
  };
  onReset = () => {
    this.props.form.resetFields();
  };
  validateAccount = (rule, value, callback) => {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error("At least four charactors for account"));
    }
  };
  render() {
    const { getFieldProps, getFieldError } = this.props.form;

    return (
      <form>
        <List
          renderHeader={() => "Form Validation"}
          renderFooter={() =>
            getFieldError("account") && getFieldError("account").join(",")
          }
        >
          <InputItem
            {...getFieldProps("account", {
              // initialValue: 'little ant',
              rules: [
                { required: true, message: "Please input account" },
                { validator: this.validateAccount }
              ]
            })}
            clear
            extra={<Icon type="right" />}
            error={!!getFieldError("account")}
            onErrorClick={() => {
              alert(getFieldError("account").join("、"));
            }}
            placeholder="please input account"
          >
            Account
          </InputItem>
          <InputItem
            {...getFieldProps("password")}
            placeholder="please input password"
            type="password"
          >
            Password
          </InputItem>
          <Item
            extra={
              <Switch
                {...getFieldProps("1", {
                  initialValue: true,
                  valuePropName: "checked"
                })}
              />
            }
          >
            Confirm Infomation
          </Item>
          <Item>
            <div style={{ padding: 7 }}>
              <Range defaultValue={[20, 80]} />
            </div>
          </Item>
          <Item
            extra={
              <Stepper
                style={{ width: "100%", minWidth: "100px" }}
                showNumber
                size="small"
                defaultValue={20}
              />
            }
          >
            Number of Subscribers
          </Item>
          <Item>
            <Button type="primary" size="small" inline onClick={this.onSubmit}>
              Submit
            </Button>
            <Button
              size="small"
              inline
              style={{ marginLeft: "20px" }}
              onClick={this.onReset}
            >
              Reset
            </Button>
          </Item>
        </List>
      </form>
    );
  }
}

const BasicInputWrapper = createForm()(BasicInput);

export default ListExample;
