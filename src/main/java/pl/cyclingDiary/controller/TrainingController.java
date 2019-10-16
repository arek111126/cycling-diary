package pl.cyclingDiary.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import pl.cyclingDiary.entity.Training;
import pl.cyclingDiary.entity.User;
import pl.cyclingDiary.model.GpxPojo.GpxType;
import pl.cyclingDiary.repository.TrainingRepository;
import pl.cyclingDiary.repository.UserRepository;
import pl.cyclingDiary.security.UserInSessionService;

import javax.validation.Valid;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import javax.xml.transform.stream.StreamSource;
import java.io.IOException;
import java.util.List;


@Controller
public class TrainingController {

    @Autowired
    UserInSessionService userInSessionService;

    @Autowired
    TrainingRepository trainingRepository;

    @Autowired
    UserRepository userRepository;


    @GetMapping("/")
    public String getTrenings(Model model) {
        String login = userInSessionService.getUserFromSessionByLogin();
        List<Training> trainingList = trainingRepository.findAllByUserId(login);
        model.addAttribute("trainingList", trainingList);
        model.addAttribute("training", new Training());
        return "index";
    }

    @PostMapping("/app/addNewTraining")
    @ResponseBody
    public ResponseEntity<String> addNewTrainings(@Valid Training training, BindingResult result, Model model) throws IOException, JAXBException {

        if (result.hasErrors()) {


            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error bining data");

        }


    /*    JAXBContext jc = JAXBContext.newInstance(GpxType.class);
        StreamSource xml = new StreamSource(training.getFile().getInputStream());
        Unmarshaller unmarshaller = jc.createUnmarshaller();
        JAXBElement<GpxType> je1 =  unmarshaller.unmarshal(xml,GpxType.class);
        GpxType gpxType = je1.getValue();

     */
        training.setGpxXml(training.getFile().getBytes());
        User CurrentUser = userRepository.findFirstByLogin(userInSessionService.getUserFromSessionByLogin());
        training.setUser(CurrentUser);
        trainingRepository.save(training);


        return ResponseEntity.status(HttpStatus.OK).body("sucess");
    }

}
