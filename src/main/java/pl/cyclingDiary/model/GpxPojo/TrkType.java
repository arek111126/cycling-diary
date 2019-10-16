
package pl.cyclingDiary.model.GpxPojo;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java-Klasse für trkType complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="trkType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="name" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="trkseg" type="{http://www.topografix.com/GPX/1/1}trksegType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "trkType", namespace = "http://www.topografix.com/GPX/1/1", propOrder = {
    "name",
    "trkseg"
})
public class TrkType {

    @XmlElement(namespace = "http://www.topografix.com/GPX/1/1", required = true)
    protected String name;
    @XmlElement(namespace = "http://www.topografix.com/GPX/1/1", required = true)
    protected TrksegType trkseg;

    /**
     * Ruft den Wert der name-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getName() {
        return name;
    }

    /**
     * Legt den Wert der name-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setName(String value) {
        this.name = value;
    }

    /**
     * Ruft den Wert der trkseg-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link TrksegType }
     *     
     */
    public TrksegType getTrkseg() {
        return trkseg;
    }

    /**
     * Legt den Wert der trkseg-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link TrksegType }
     *     
     */
    public void setTrkseg(TrksegType value) {
        this.trkseg = value;
    }

}
