package chewyt.Template.models;

import java.io.Serializable;

public class Form implements Serializable{
    public String city;

    public Form(String city) {
        this.city = city;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "Form [city=" + city + "]";
    }
    
    
}
