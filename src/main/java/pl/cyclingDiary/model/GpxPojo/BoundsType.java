
package pl.cyclingDiary.model.GpxPojo;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlType;
import javax.xml.bind.annotation.XmlValue;


/**
 * <p>Java-Klasse für boundsType complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="boundsType">
 *   &lt;simpleContent>
 *     &lt;extension base="&lt;http://www.w3.org/2001/XMLSchema>string">
 *       &lt;attribute name="minlat" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="minlon" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="maxlat" type="{http://www.w3.org/2001/XMLSchema}string" />
 *       &lt;attribute name="maxlon" type="{http://www.w3.org/2001/XMLSchema}string" />
 *     &lt;/extension>
 *   &lt;/simpleContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "boundsType", namespace = "http://www.topografix.com/GPX/1/1", propOrder = {
    "value"
})
public class BoundsType {

    @XmlValue
    protected String value;
    @XmlAttribute(name = "minlat")
    protected String minlat;
    @XmlAttribute(name = "minlon")
    protected String minlon;
    @XmlAttribute(name = "maxlat")
    protected String maxlat;
    @XmlAttribute(name = "maxlon")
    protected String maxlon;

    /**
     * Ruft den Wert der value-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getValue() {
        return value;
    }

    /**
     * Legt den Wert der value-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setValue(String value) {
        this.value = value;
    }

    /**
     * Ruft den Wert der minlat-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMinlat() {
        return minlat;
    }

    /**
     * Legt den Wert der minlat-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMinlat(String value) {
        this.minlat = value;
    }

    /**
     * Ruft den Wert der minlon-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMinlon() {
        return minlon;
    }

    /**
     * Legt den Wert der minlon-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMinlon(String value) {
        this.minlon = value;
    }

    /**
     * Ruft den Wert der maxlat-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMaxlat() {
        return maxlat;
    }

    /**
     * Legt den Wert der maxlat-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMaxlat(String value) {
        this.maxlat = value;
    }

    /**
     * Ruft den Wert der maxlon-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMaxlon() {
        return maxlon;
    }

    /**
     * Legt den Wert der maxlon-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMaxlon(String value) {
        this.maxlon = value;
    }

}
