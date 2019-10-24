package pl.cyclingDiary.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import pl.cyclingDiary.model.StatisticData;
import pl.cyclingDiary.repository.TrainingRepository;
import pl.cyclingDiary.repository.UserRepository;
import pl.cyclingDiary.security.UserInSessionService;

import java.util.List;


@Controller
public class StatisticControler {
    @Autowired
    UserInSessionService userInSessionService;


    @Autowired
    UserRepository userRepository;

    @Autowired
    TrainingRepository trainingRepository;

    @GetMapping("/app/statistic")
    @ResponseBody
    public ResponseEntity<List<StatisticData>> getStatistic() {
        try{
            int userId = userRepository.findFirstByLogin(userInSessionService.getUserFromSessionByLogin()).getId();
            return ResponseEntity.status(HttpStatus.OK).body(trainingRepository.findStatisticData(userId));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }



    }

}
