
package pl.cyclingDiary.model.GpxPojo;

import pl.cyclingDiary.entity.Training;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java-Klasse für trkptType complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="trkptType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ele" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/sequence>
 *       &lt;attribute name="lat" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="lon" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "trkptType", namespace = "http://www.topografix.com/GPX/1/1", propOrder = {
    "ele"
})
public class TrkptType {


    @XmlElement(namespace = "http://www.topografix.com/GPX/1/1", required = true)
    protected String ele;
    @XmlAttribute(name = "lat")
    protected String lat;
    @XmlAttribute(name = "lon")
    protected String lon;



    public TrkptType() {
    }

    /**
     * Ruft den Wert der ele-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */


    public String getEle() {
        return ele;
    }

    /**
     * Legt den Wert der ele-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEle(String value) {
        this.ele = value;
    }

    /**
     * Ruft den Wert der lat-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLat() {
        return lat;
    }

    /**
     * Legt den Wert der lat-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLat(String value) {
        this.lat = value;
    }

    /**
     * Ruft den Wert der lon-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLon() {
        return lon;
    }

    /**
     * Legt den Wert der lon-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLon(String value) {
        this.lon = value;
    }

}
