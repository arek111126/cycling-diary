
package pl.cyclingDiary.model.GpxPojo;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java-Klasse für metadataType complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="metadataType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="name" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="desc" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="copyright" type="{http://www.topografix.com/GPX/1/1}copyrightType"/>
 *         &lt;element name="bounds" type="{http://www.topografix.com/GPX/1/1}boundsType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "metadataType", namespace = "http://www.topografix.com/GPX/1/1", propOrder = {
    "name",
    "desc",
    "copyright",
    "bounds"
})
public class MetadataType {

    @XmlElement(namespace = "http://www.topografix.com/GPX/1/1", required = true)
    protected String name;
    @XmlElement(namespace = "http://www.topografix.com/GPX/1/1", required = true)
    protected String desc;
    @XmlElement(namespace = "http://www.topografix.com/GPX/1/1", required = true)
    protected CopyrightType copyright;
    @XmlElement(namespace = "http://www.topografix.com/GPX/1/1", required = true)
    protected BoundsType bounds;

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
     * Ruft den Wert der desc-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDesc() {
        return desc;
    }

    /**
     * Legt den Wert der desc-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDesc(String value) {
        this.desc = value;
    }

    /**
     * Ruft den Wert der copyright-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link CopyrightType }
     *     
     */
    public CopyrightType getCopyright() {
        return copyright;
    }

    /**
     * Legt den Wert der copyright-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link CopyrightType }
     *     
     */
    public void setCopyright(CopyrightType value) {
        this.copyright = value;
    }

    /**
     * Ruft den Wert der bounds-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link BoundsType }
     *     
     */
    public BoundsType getBounds() {
        return bounds;
    }

    /**
     * Legt den Wert der bounds-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link BoundsType }
     *     
     */
    public void setBounds(BoundsType value) {
        this.bounds = value;
    }

}
