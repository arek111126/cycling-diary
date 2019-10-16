
package pl.cyclingDiary.model.GpxPojo;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the pl.cyclingDiary.model.NewXML package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _Gpx_QNAME = new QName("http://www.topografix.com/GPX/1/1", "gpx");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: pl.cyclingDiary.model.NewXML
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link GpxType }
     * 
     */
    public GpxType createGpxType() {
        return new GpxType();
    }

    /**
     * Create an instance of {@link TrkType }
     * 
     */
    public TrkType createTrkType() {
        return new TrkType();
    }

    /**
     * Create an instance of {@link CopyrightType }
     * 
     */
    public CopyrightType createCopyrightType() {
        return new CopyrightType();
    }

    /**
     * Create an instance of {@link TrksegType }
     * 
     */
    public TrksegType createTrksegType() {
        return new TrksegType();
    }

    /**
     * Create an instance of {@link TrkptType }
     * 
     */
    public TrkptType createTrkptType() {
        return new TrkptType();
    }

    /**
     * Create an instance of {@link BoundsType }
     * 
     */
    public BoundsType createBoundsType() {
        return new BoundsType();
    }

    /**
     * Create an instance of {@link MetadataType }
     * 
     */
    public MetadataType createMetadataType() {
        return new MetadataType();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GpxType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.topografix.com/GPX/1/1", name = "gpx")
    public JAXBElement<GpxType> createGpx(GpxType value) {
        return new JAXBElement<GpxType>(_Gpx_QNAME, GpxType.class, null, value);
    }

}
