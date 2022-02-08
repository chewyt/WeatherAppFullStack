package chewyt.Template.controllers.rest;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import chewyt.Template.models.Weather;
import chewyt.Template.services.weatherService;
import jakarta.json.Json;
import jakarta.json.JsonObject;

@RestController
@RequestMapping(path = "/api/weather", produces = MediaType.APPLICATION_JSON_VALUE)
public class APIController {

    @Autowired
    weatherService weatherService;

    private final Logger logger = Logger.getLogger(APIController.class.getName());
    
    
    @GetMapping(path="/{city}" ,consumes= MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getWeather(@PathVariable String city){

        
        logger.info("Name from Path Variable  >>>>> %s".formatted(city));
        
        
        List<Weather> weathers;
        
        try {
            weathers=weatherService.getWeather(city);
            logger.info("Is Weather List empty: %s".formatted(weathers.isEmpty()));
            if (weathers.size()>0){
                //cache
                //return result to client  
                final JsonObject resp = Json.createObjectBuilder()
                .add("cityName", weathers.get(0).getCityNameInSentenceCase())
                .add("main", weathers.get(0).getMain())
                .add("description", weathers.get(0).getDescription())
                .add("icon", weathers.get(0).getIcon())
                .add("temperature", weathers.get(0).getTempDisplay())
                .add("countryCode", weathers.get(0).getCountryCode())
                .add("countryName", weathers.get(0).getCountryName())
                .build();
            return ResponseEntity.status(HttpStatus.CREATED).body(resp.toString()); 
            }
        } catch (Exception e) {
            logger.warning("Warning: %s".formatted(e.getMessage()));
            final JsonObject resp = Json.createObjectBuilder()
                 .add("message", "Bad request")
                 .build();
             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resp.toString());
        } 
        
        final JsonObject resp = Json.createObjectBuilder()
                 .add("message", "Not found")
                 .build();
             return ResponseEntity.status(HttpStatus.NOT_FOUND).body(resp.toString());

    }

    
}
