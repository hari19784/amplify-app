
 export const getSites=`
 query MyQuery {
  getSites {
    AddrCity
    AddrCountry
    AddrStateProvince
    CreatedDateTime
    IPAddress
    IsDaylightSavingTimeEnabled
    IsDeleted
    PortNumber
    ProtocolType
    SiteName
    SiteID
    Timezone
  }
  
}`

 export const getEquipment=`
 query MyQuery {
  getEquipment {
    ActiveSetPoint
    EquipmentType
    HeatCoolMode
    Name
    Variance
    SpaceTemperatureActive
  }
}`



