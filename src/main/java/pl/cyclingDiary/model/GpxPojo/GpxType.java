
package pl.cyclingDiary.model.GpxPojo;

import javax.xml.bind.annotation.*;



@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "gpxType", namespace = "http://www.topografix.com/GPX/1/1", propOrder = {
    "metadata",
    "trk"
})
 // @XmlRootElement(name="gpx", namespace = "http://www.topografix.com/GPX/1/1")
public class GpxType {

    @XmlElement(namespace = "http://www.topografix.com/GPX/1/1", required = true)
    protected MetadataType metadata;
    @XmlElement(namespace = "http://www.topografix.com/GPX/1/1", required = true)
    protected TrkType trk;
    @XmlAttribute(name = "version")
    protected String version;
    @XmlAttribute(name = "creator")
    protected String creator;

    public MetadataType getMetadata() {
        return metadata;
    }

    public void setMetadata(MetadataType value) {
        this.metadata = value;
    }


    public TrkType getTrk() {
        return trk;
    }


    public void setTrk(TrkType value) {
        this.trk = value;
    }


    public String getVersion() {
        return version;
    }


    public void setVersion(String value) {
        this.version = value;
    }


    public String getCreator() {
        return creator;
    }


    public void setCreator(String value) {
        this.creator = value;
    }

}
