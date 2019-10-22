package pl.cyclingDiary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import pl.cyclingDiary.entity.Training;
import pl.cyclingDiary.entity.User;

import pl.cyclingDiary.model.Result;
import pl.cyclingDiary.repository.TrainingRepository;
import pl.cyclingDiary.repository.UserRepository;
import pl.cyclingDiary.security.UserInSessionService;

import javax.validation.Valid;

import javax.xml.bind.JAXBException;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;


@Controller
@Transactional
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


        training.setGpxXml(new String(training.getFile().getBytes()));
        User CurrentUser = userRepository.findFirstByLogin(userInSessionService.getUserFromSessionByLogin());
        training.setUser(CurrentUser);
        Training savedTraining = trainingRepository.save(training);
        return ResponseEntity.status(HttpStatus.OK).body(Integer.toString(savedTraining.getId()));
    }


    @GetMapping("/app/getTraining")
    @ResponseBody
    public ResponseEntity<Training> getTrainingTest(@RequestParam int id) {
        Training training = trainingRepository.findFirstById(id);

        try {

            return ResponseEntity.status(HttpStatus.OK).body(training);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);

        }


    }


    @PostMapping("/app/deleteTraining")
    @ResponseBody
    public ResponseEntity<String> deleteElements(@RequestParam List<Integer> listId) {

        listId.forEach(item -> trainingRepository.deleteTrainingById(item));

        return ResponseEntity.status(HttpStatus.OK).body("okkkkkkk");
    }

    @GetMapping("/app/getUsersInfo")
    @ResponseBody
    public ResponseEntity<List<Result>> getValue(@RequestParam(defaultValue = "", required = false) String fromDate, @RequestParam(defaultValue = "", required = false) String toDate) {

        if (fromDate.equals("") || toDate.equals("")) {
            LocalDate localDate = LocalDate.now();
            String currentDate = localDate.toString();
            List<Result> resultList = trainingRepository.findByMonthAndYear("1990-01-01", currentDate);
            return resultList.size() > 0 ? ResponseEntity.status(HttpStatus.OK).body(resultList) : ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }


        List<Result> resultList = trainingRepository.findByMonthAndYear(fromDate, toDate);
        return resultList.size() > 0 ? ResponseEntity.status(HttpStatus.OK).body(resultList) : ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);


    }


}


