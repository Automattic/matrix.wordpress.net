"use strict";(self.webpackChunkelement_web=self.webpackChunkelement_web||[]).push([[532],{"./node_modules/matrix-react-sdk/src/async-components/views/dialogs/eventindex/DisableEventIndexDialog.tsx":(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var n=t("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),i=t("./node_modules/react/index.js"),a=t("./node_modules/matrix-react-sdk/src/components/views/dialogs/BaseDialog.tsx"),r=t("./node_modules/matrix-react-sdk/src/components/views/elements/Spinner.tsx"),d=t("./node_modules/matrix-react-sdk/src/components/views/elements/DialogButtons.tsx"),o=t("./node_modules/matrix-react-sdk/src/dispatcher/dispatcher.ts"),l=t("./node_modules/matrix-react-sdk/src/languageHandler.tsx"),c=t("./node_modules/matrix-react-sdk/src/settings/SettingsStore.ts"),m=t("./node_modules/matrix-react-sdk/src/indexing/EventIndexPeg.ts"),u=t("./node_modules/matrix-react-sdk/src/dispatcher/actions.ts"),g=t("./node_modules/matrix-react-sdk/src/settings/SettingLevel.ts");class p extends i.Component{constructor(e){super(e),(0,n.c)(this,"onDisable",(async()=>{this.setState({disabling:!0}),await c.c.setValue("enableEventIndexing",null,g.m.DEVICE,!1),await m.c.deleteEventIndex(),this.props.onFinished(!0),o.cp.fire(u.S.ViewUserSettings)})),this.state={disabling:!1}}render(){return i.createElement(a.c,{onFinished:this.props.onFinished,title:(0,l._t)("common|are_you_sure")},(0,l._t)("settings|security|message_search_disable_warning"),this.state.disabling?i.createElement(r.c,null):i.createElement("div",null),i.createElement(d.c,{primaryButton:(0,l._t)("action|disable"),onPrimaryButtonClick:this.onDisable,primaryButtonClass:"danger",cancelButtonClass:"warning",onCancel:this.props.onFinished,disabled:this.state.disabling}))}}}}]);
//# sourceMappingURL=532.js.map