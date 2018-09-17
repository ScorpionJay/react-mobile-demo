import {
  List,
  InputItem,
  Switch,
  Stepper,
  WhiteSpace,
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
    let userInfo = sessionStorage.getItem("userInfo") || "{}";
    try {
      userInfo = JSON.parse(userInfo);
    } catch (error) {
      userInfo = {};
    }

    const { nickname = "", headimgurl = "" } = userInfo;
    return (
      <div>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" extra={nickname}>
            Name
          </Item>
          <Item
            arrow="horizontal"
            extra={headimgurl && <img src={headimgurl} />}
          >
            Picture
          </Item>
          <Item arrow="horizontal" extra={"extra content"}>
            我的
          </Item>
        </List>
        <WhiteSpace />
        <List>
          <Item arrow="horizontal" extra={"extra content"}>
            我的
          </Item>
          <Item extra={"extra content"}>我的</Item>
          <Item extra={"extra content"}>我的</Item>
        </List>
        <WhiteSpace />
        <Button>退出</Button>
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
