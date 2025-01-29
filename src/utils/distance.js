function toRadians(degrees) {
    return degrees * (Math.PI / 180)
  }
  
  export function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371 // Earth's radius in kilometers
    const dLat = toRadians(lat2 - lat1)
    const dLon = toRadians(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }
  
  export function filterPersonsWithin10km(persons, centerLat, centerLon) {
    return persons.filter((person) => {
      const distance = calculateDistance(centerLat, centerLon, person.location[0], person.location[1])
      return distance <= 10
    })
  }
  
  