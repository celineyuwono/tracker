import * as React from "react";
import * as images from "@exampleAssets";
import Icon from "@duik/icon";
import { Avatar, TopBar, TopBarSection, TextField, FormGroup } from "@duik/it";

import cls from "./analytics-top-bar-mobile.module.scss";

const AnalyticsHeader = props => (
  <TopBar className={cls["analytics-top-bar-mobile"]} {...props}>
    <TopBarSection className={cls["analytics-top-bar-mobile-search-wrapper"]}>
      <FormGroup className={cls["analytics-top-bar-mobile-search-wrapper"]}>
        <TextField
          clear
          leftEl={<Icon>search_left</Icon>}
          placeholder="Type to search..."
        />
      </FormGroup>
    </TopBarSection>
    <TopBarSection>
      <Avatar imgUrl={images.a21} />
    </TopBarSection>
  </TopBar>
);

export default AnalyticsHeader;
