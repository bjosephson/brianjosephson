import { Box, Flex, Input, Label } from "./"

const StateProvincePicker = (props) => {
  return (
    <Flex>
    <Box w="50px">
      {/*** Alabama ***/}
      <Flex>
        <Input type="checkbox" name="AL" id="AL" checked={props.states.AL} onChange={props.onChange} />
        <Label>AL</Label>
      </Flex>
      {/*** Alaska ***/}
      <Flex>
        <Input type="checkbox" id="AK" checked={props.states.AK} onChange={props.onChange}/>
        <Label >AK</Label>
      </Flex>
      {/*** Arizona ***/}
      <Flex>
        <Input type="checkbox" id="AZ" checked={props.states.AZ} onChange={props.onChange} />
        <Label>AZ</Label>
      </Flex>
      {/*** Arkansas ***/}
      <Flex>
        <Input type="checkbox" id="AR" checked={props.states.AR} onChange={props.onChange} />
        <Label>AR</Label>
      </Flex>
      {/*** California ***/}
      <Flex>
        <Input type="checkbox" id="CA" checked={props.states.CA} onChange={props.onChange} />
        <Label>CA</Label>
      </Flex>
      {/*** Colorado ***/}
      <Flex>
        <Input type="checkbox" id="CO" checked={props.states.CO} onChange={props.onChange} />
        <Label>CO</Label>
      </Flex>
      {/*** Connecticut ***/}
      <Flex>
        <Input type="checkbox" id="CT" checked={props.states.CT} onChange={props.onChange} />
        <Label>CT</Label>
      </Flex>
      {/*** Deleware ***/}
      <Flex>
        <Input type="checkbox" id="DE" checked={props.states.DE} onChange={props.onChange} />
        <Label>DE</Label>
      </Flex>
      {/*** Florida ***/}
      <Flex>
        <Input type="checkbox" id="FL" checked={props.states.FL} onChange={props.onChange} />
        <Label>FL</Label>
      </Flex>
      {/*** Georgia ***/}
      <Flex>
        <Input type="checkbox" id="GA" checked={props.states.GA} onChange={props.onChange} />
        <Label>GA</Label>
      </Flex>
    </Box>
{/***** Coulmn 2 *****/}
    <Box w="50px">
      {/*** Hawaii ***/}
      <Flex>
        <Input type="checkbox" id="HI" checked={props.states.HI} onChange={props.onChange} />
        <Label>HI</Label>
      </Flex>
      {/*** Idaho ***/}
      <Flex>
        <Input type="checkbox" id="ID" checked={props.states.ID} onChange={props.onChange} />
        <Label>ID</Label>
      </Flex>
      {/*** Illinois ***/}
      <Flex>
        <Input type="checkbox" id="IL" checked={props.states.IL} onChange={props.onChange} />
        <Label>IL</Label>
      </Flex>
      {/*** Indiana ***/}
      <Flex>
        <Input type="checkbox" id="IN" checked={props.states.IN} onChange={props.onChange} />
        <Label>IN</Label>
      </Flex>
      {/*** Iowa ***/}
      <Flex>
        <Input type="checkbox" id="IA" checked={props.states.IA} onChange={props.onChange} />
        <Label>IA</Label>
      </Flex>
      {/*** Kansas ***/}
      <Flex>
        <Input type="checkbox" id="KS" checked={props.states.KS} onChange={props.onChange} />
        <Label>KS</Label>
      </Flex>
      {/*** Kentucky ***/}
      <Flex>
        <Input type="checkbox" id="KY" checked={props.states.KY} onChange={props.onChange} />
        <Label>KY</Label>
      </Flex>
      {/*** Louisiana ***/}
      <Flex>
        <Input type="checkbox" id="LA" checked={props.states.LA} onChange={props.onChange} />
        <Label>LA</Label>
      </Flex>
      {/*** Maine ***/}
      <Flex>
        <Input type="checkbox" id="ME" checked={props.states.ME} onChange={props.onChange} />
        <Label>ME</Label>
      </Flex>
      {/*** Maryland ***/}
      <Flex>
        <Input type="checkbox" id="MD" checked={props.states.MD} onChange={props.onChange} />
        <Label>MD</Label>
      </Flex>
    </Box>
{/***** Coulmn 3 *****/}
    <Box w="50px">
      {/*** Massachusetts ***/}
      <Flex>
        <Input type="checkbox" id="MA" checked={props.states.MA} onChange={props.onChange} />
        <Label>MA</Label>
      </Flex>
      {/*** Michigan ***/}
      <Flex>
        <Input type="checkbox" id="MI" checked={props.states.MI} onChange={props.onChange} />
        <Label>MI</Label>
      </Flex>
      {/*** Minnesota ***/}
      <Flex>
        <Input type="checkbox" id="MN" checked={props.states.MN} onChange={props.onChange} />
        <Label>MN</Label>
      </Flex>
      {/*** Mississippi ***/}
      <Flex>
        <Input type="checkbox" id="MS" checked={props.states.MS} onChange={props.onChange} />
        <Label>MS</Label>
      </Flex>
      {/*** Missouri ***/}
      <Flex>
        <Input type="checkbox" id="MO" checked={props.states.MO} onChange={props.onChange} />
        <Label>MO</Label>
      </Flex>
      {/*** Montana ***/}
      <Flex>
        <Input type="checkbox" id="MT" checked={props.states.MT} onChange={props.onChange} />
        <Label>MT</Label>
      </Flex>
      {/*** Nebraska ***/}
      <Flex>
        <Input type="checkbox" id="NE" checked={props.states.NE} onChange={props.onChange} />
        <Label>NE</Label>
      </Flex>
      {/*** Nevada ***/}
      <Flex>
        <Input type="checkbox" id="NV" checked={props.states.NV} onChange={props.onChange} />
        <Label>NV</Label>
      </Flex>
      {/*** New Hanpshire ***/}
      <Flex>
        <Input type="checkbox" id="NH" checked={props.states.NH} onChange={props.onChange} />
        <Label>NH</Label>
      </Flex>
      {/*** New Jersey ***/}
      <Flex>
        <Input type="checkbox" id="NJ" checked={props.states.NJ} onChange={props.onChange} />
        <Label>NJ</Label>
      </Flex>
    </Box>
{/***** Coulmn 4 *****/}
    <Box w="50px">
      {/*** New Mexico ***/}
      <Flex>
        <Input type="checkbox" id="NM" checked={props.states.NM} onChange={props.onChange} />
        <Label>NM</Label>
      </Flex>
      {/*** New York ***/}
      <Flex>
        <Input type="checkbox" id="NY" checked={props.states.NY} onChange={props.onChange} />
        <Label>NY</Label>
      </Flex>
      {/*** North Carolina ***/}
      <Flex>
        <Input type="checkbox" id="NC" checked={props.states.NC} onChange={props.onChange} />
        <Label>NC</Label>
      </Flex>
      {/*** North Dakota ***/}
      <Flex>
        <Input type="checkbox" id="ND" checked={props.states.ND} onChange={props.onChange} />
        <Label>ND</Label>
      </Flex>
      {/*** Ohio ***/}
      <Flex>
        <Input type="checkbox" id="OH" checked={props.states.OH} onChange={props.onChange} />
        <Label>OH</Label>
      </Flex>
      {/*** Oklahoma ***/}
      <Flex>
        <Input type="checkbox" id="OK" checked={props.states.OK} onChange={props.onChange} />
        <Label>OK</Label>
      </Flex>
      {/*** Oregon ***/}
      <Flex>
        <Input type="checkbox" id="OR" checked={props.states.OR} onChange={props.onChange} />
        <Label>OR</Label>
      </Flex>
      {/*** Pennsylvania ***/}
      <Flex>
        <Input type="checkbox" id="PA" checked={props.states.PA} onChange={props.onChange} />
        <Label>PA</Label>
      </Flex>
      {/*** Rhode Island ***/}
      <Flex>
        <Input type="checkbox" id="RI" checked={props.states.RI} onChange={props.onChange} />
        <Label>RI</Label>
      </Flex>
      {/*** South Carolina ***/}
      <Flex>
        <Input type="checkbox" id="SC" checked={props.states.SC} onChange={props.onChange} />
        <Label>SC</Label>
      </Flex>
    </Box>
{/***** Coulmn 5 *****/}
    <Box w="50px">
      {/*** South Dakota ***/}
      <Flex style={{alignItems:"center"}}>
        <Input type="checkbox" id="SD" checked={props.states.SD} onChange={props.onChange} />
        <Label>SD</Label>
      </Flex>
      {/*** Tennessee ***/}
      <Flex>
        <Input type="checkbox" id="TN" checked={props.states.TN} onChange={props.onChange} />
        <Label>TN</Label>
      </Flex>
      {/*** Texas ***/}
      <Flex>
        <Input type="checkbox" id="TX" checked={props.states.TX} onChange={props.onChange} />
        <Label>TX</Label>
      </Flex>
      {/*** Utah ***/}
      <Flex>
        <Input type="checkbox" id="UT" checked={props.states.UT} onChange={props.onChange} />
        <Label>UT</Label>
      </Flex>
      {/*** Vermont ***/}
      <Flex>
        <Input type="checkbox" id="VT" checked={props.states.VT} onChange={props.onChange} />
        <Label>VT</Label>
      </Flex>
      {/*** Virginia ***/}
      <Flex>
        <Input type="checkbox" id="VA" checked={props.states.VA} onChange={props.onChange} />
        <Label>VA</Label>
      </Flex>
      {/*** Washington ***/}
      <Flex>
        <Input type="checkbox" id="WA" checked={props.states.WA} onChange={props.onChange} />
        <Label>WA</Label>
      </Flex>
      {/*** West Virginia ***/}
      <Flex>
        <Input type="checkbox" id="WV" checked={props.states.WV} onChange={props.onChange} />
        <Label>WV</Label>
      </Flex>
      {/*** Wisconsin ***/}
      <Flex>
        <Input type="checkbox" id="WI" checked={props.states.WI} onChange={props.onChange} />
        <Label>WI</Label>
      </Flex>
      {/*** Wyoming ***/}
      <Flex>
        <Input type="checkbox" id="WY"checked={props.states.WY} onChange={props.onChange} />
        <Label>WY</Label>
      </Flex>
    </Box>
    </Flex>
  )
}

export default StateProvincePicker;