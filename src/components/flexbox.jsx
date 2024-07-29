/* eslint-disable react/prop-types */
const Box = (props) => {

  const space = {
    height: props.h ? props.h : "100%",
    margin: props.m ? props.m : "0rem",
    marginTop: props.mt ? props.mt : "0rem",
    marginBottom: props.mb ? props.mb : "0rem",
    marginLeft: props.ml ? props.ml : "0rem",
    marginRight: props.mr ? props.mr : "0rem",
    padding: props.p ? props.p : "0rem",
    paddingTop: props.pt ? props.pt : "0rem",
    paddingBottom: props.pb ? props.pb : "0rem",
    paddingLeft: props.pl ? props.pl : "0rem",
    paddingRight: props.pr ? props.pr : "0rem",
    width: props.w ? props.w : "100%",    
  };

  return(
    <div style={{
      ...space,
      ...props.style
      }} 
      {...props}
    > 
      { props.children }
    </div>
  );
};

const Flex = (props) => {
  const flex = {
    alignItems: props.alignItems ? props.alignItems : "center",
    justifyContent: props.justifyContent ? props.justifyContent : "space-between",
  }
  const space = {
    height: props.h ? props.h : null,
    margin: props.m ? props.m : "0rem",
    marginTop: props.mt ? props.mt : "0rem",
    marginBottom: props.mb ? props.mb : "0rem",
    marginLeft: props.ml ? props.ml : "0rem",
    marginRight: props.mr ? props.mr : "0rem",
    padding: props.p ? props.p : null,
    paddingTop: props.pt ? props.pt : "0rem",
    paddingBottom: props.pb ? props.pb : "0rem",
    paddingLeft: props.pl ? props.pl : "0rem",
    paddingRight: props.pr ? props.pr : "0rem",
    width: props.w ? props.w : "auto",    
    ...props.style
  };
  return(
    <div style={{
      display: "flex",
      ...space,
      ...flex
    }}>
      { props.children }
    </div>
  );
};

export {
  Flex, 
  Box
}