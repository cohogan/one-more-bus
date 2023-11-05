import * as React from "react";
import Map, { Marker, Source, Layer } from "react-map-gl";
import PopupInfo from "./Popup";
import styles from "./Map.module.css";

const validPoints = [
  "37.712016,-122.38448100000006",
  "37.712016,-122.38828100000006",
  "37.712016,-122.39208100000006",
  "37.712016,-122.39588100000006",
  "37.712016,-122.39968100000006",
  "37.712016,-122.40348100000006",
  "37.712016,-122.40728100000005",
  "37.712016,-122.41108100000005",
  "37.712016,-122.41488100000005",
  "37.712016,-122.41868100000005",
  "37.712016,-122.42248100000005",
  "37.712016,-122.42628100000005",
  "37.712016,-122.43008100000004",
  "37.712016,-122.43388100000004",
  "37.712016,-122.43768100000004",
  "37.712016,-122.44148100000004",
  "37.712016,-122.44528100000004",
  "37.712016,-122.44908100000004",
  "37.712016,-122.45288100000003",
  "37.712016,-122.45668100000003",
  "37.712016,-122.46048100000003",
  "37.712016,-122.46428100000003",
  "37.712016,-122.46808100000003",
  "37.712016,-122.47188100000002",
  "37.712016,-122.47568100000002",
  "37.712016,-122.47948100000002",
  "37.712016,-122.48328100000002",
  "37.712016,-122.48708100000002",
  "37.712016,-122.49088100000002",
  "37.712016,-122.49468100000001",
  "37.712016,-122.49848100000001",
  "37.712016,-122.50228100000001",
  "37.715816,-122.38068100000007",
  "37.715816,-122.38448100000006",
  "37.715816,-122.38828100000006",
  "37.715816,-122.39208100000006",
  "37.715816,-122.39588100000006",
  "37.715816,-122.39968100000006",
  "37.715816,-122.40348100000006",
  "37.715816,-122.40728100000005",
  "37.715816,-122.41108100000005",
  "37.715816,-122.41488100000005",
  "37.715816,-122.41868100000005",
  "37.715816,-122.42248100000005",
  "37.715816,-122.42628100000005",
  "37.715816,-122.43008100000004",
  "37.715816,-122.43388100000004",
  "37.715816,-122.43768100000004",
  "37.715816,-122.44148100000004",
  "37.715816,-122.44528100000004",
  "37.715816,-122.44908100000004",
  "37.715816,-122.45288100000003",
  "37.715816,-122.45668100000003",
  "37.715816,-122.46048100000003",
  "37.715816,-122.46428100000003",
  "37.715816,-122.46808100000003",
  "37.715816,-122.47188100000002",
  "37.715816,-122.47568100000002",
  "37.715816,-122.47948100000002",
  "37.715816,-122.48328100000002",
  "37.715816,-122.48708100000002",
  "37.715816,-122.49088100000002",
  "37.715816,-122.49468100000001",
  "37.715816,-122.49848100000001",
  "37.715816,-122.50228100000001",
  "37.719615999999995,-122.37308100000007",
  "37.719615999999995,-122.37688100000007",
  "37.719615999999995,-122.38068100000007",
  "37.719615999999995,-122.38448100000006",
  "37.719615999999995,-122.38828100000006",
  "37.719615999999995,-122.39208100000006",
  "37.719615999999995,-122.39588100000006",
  "37.719615999999995,-122.39968100000006",
  "37.719615999999995,-122.40348100000006",
  "37.719615999999995,-122.40728100000005",
  "37.719615999999995,-122.41108100000005",
  "37.719615999999995,-122.41488100000005",
  "37.719615999999995,-122.41868100000005",
  "37.719615999999995,-122.42248100000005",
  "37.719615999999995,-122.42628100000005",
  "37.719615999999995,-122.43008100000004",
  "37.719615999999995,-122.43388100000004",
  "37.719615999999995,-122.43768100000004",
  "37.719615999999995,-122.44148100000004",
  "37.719615999999995,-122.44528100000004",
  "37.719615999999995,-122.44908100000004",
  "37.719615999999995,-122.45288100000003",
  "37.719615999999995,-122.45668100000003",
  "37.719615999999995,-122.46048100000003",
  "37.719615999999995,-122.46428100000003",
  "37.719615999999995,-122.46808100000003",
  "37.719615999999995,-122.47188100000002",
  "37.719615999999995,-122.47568100000002",
  "37.719615999999995,-122.47948100000002",
  "37.719615999999995,-122.48328100000002",
  "37.719615999999995,-122.48708100000002",
  "37.719615999999995,-122.49088100000002",
  "37.719615999999995,-122.49468100000001",
  "37.719615999999995,-122.49848100000001",
  "37.719615999999995,-122.50228100000001",
  "37.72341599999999,-122.36548100000007",
  "37.72341599999999,-122.36928100000007",
  "37.72341599999999,-122.37308100000007",
  "37.72341599999999,-122.37688100000007",
  "37.72341599999999,-122.38068100000007",
  "37.72341599999999,-122.38448100000006",
  "37.72341599999999,-122.38828100000006",
  "37.72341599999999,-122.39208100000006",
  "37.72341599999999,-122.39588100000006",
  "37.72341599999999,-122.39968100000006",
  "37.72341599999999,-122.40348100000006",
  "37.72341599999999,-122.40728100000005",
  "37.72341599999999,-122.41108100000005",
  "37.72341599999999,-122.41488100000005",
  "37.72341599999999,-122.41868100000005",
  "37.72341599999999,-122.42248100000005",
  "37.72341599999999,-122.42628100000005",
  "37.72341599999999,-122.43008100000004",
  "37.72341599999999,-122.43388100000004",
  "37.72341599999999,-122.43768100000004",
  "37.72341599999999,-122.44148100000004",
  "37.72341599999999,-122.44528100000004",
  "37.72341599999999,-122.44908100000004",
  "37.72341599999999,-122.45288100000003",
  "37.72341599999999,-122.45668100000003",
  "37.72341599999999,-122.46048100000003",
  "37.72341599999999,-122.46428100000003",
  "37.72341599999999,-122.46808100000003",
  "37.72341599999999,-122.47188100000002",
  "37.72341599999999,-122.47568100000002",
  "37.72341599999999,-122.47948100000002",
  "37.72341599999999,-122.48328100000002",
  "37.72341599999999,-122.48708100000002",
  "37.72341599999999,-122.49088100000002",
  "37.72341599999999,-122.49468100000001",
  "37.72341599999999,-122.49848100000001",
  "37.72341599999999,-122.50228100000001",
  "37.72341599999999,-122.50608100000001",
  "37.72721599999999,-122.36168100000008",
  "37.72721599999999,-122.36548100000007",
  "37.72721599999999,-122.36928100000007",
  "37.72721599999999,-122.37308100000007",
  "37.72721599999999,-122.37688100000007",
  "37.72721599999999,-122.38068100000007",
  "37.72721599999999,-122.38448100000006",
  "37.72721599999999,-122.38828100000006",
  "37.72721599999999,-122.39208100000006",
  "37.72721599999999,-122.39588100000006",
  "37.72721599999999,-122.39968100000006",
  "37.72721599999999,-122.40348100000006",
  "37.72721599999999,-122.40728100000005",
  "37.72721599999999,-122.41108100000005",
  "37.72721599999999,-122.41488100000005",
  "37.72721599999999,-122.41868100000005",
  "37.72721599999999,-122.42248100000005",
  "37.72721599999999,-122.42628100000005",
  "37.72721599999999,-122.43008100000004",
  "37.72721599999999,-122.43388100000004",
  "37.72721599999999,-122.43768100000004",
  "37.72721599999999,-122.44148100000004",
  "37.72721599999999,-122.44528100000004",
  "37.72721599999999,-122.44908100000004",
  "37.72721599999999,-122.45288100000003",
  "37.72721599999999,-122.45668100000003",
  "37.72721599999999,-122.46048100000003",
  "37.72721599999999,-122.46428100000003",
  "37.72721599999999,-122.46808100000003",
  "37.72721599999999,-122.47188100000002",
  "37.72721599999999,-122.47568100000002",
  "37.72721599999999,-122.47948100000002",
  "37.72721599999999,-122.48328100000002",
  "37.72721599999999,-122.48708100000002",
  "37.72721599999999,-122.49088100000002",
  "37.72721599999999,-122.49468100000001",
  "37.72721599999999,-122.49848100000001",
  "37.72721599999999,-122.50228100000001",
  "37.72721599999999,-122.50608100000001",
  "37.73101599999999,-122.36168100000008",
  "37.73101599999999,-122.36548100000007",
  "37.73101599999999,-122.36928100000007",
  "37.73101599999999,-122.37308100000007",
  "37.73101599999999,-122.37688100000007",
  "37.73101599999999,-122.38068100000007",
  "37.73101599999999,-122.38448100000006",
  "37.73101599999999,-122.38828100000006",
  "37.73101599999999,-122.39208100000006",
  "37.73101599999999,-122.39588100000006",
  "37.73101599999999,-122.39968100000006",
  "37.73101599999999,-122.40348100000006",
  "37.73101599999999,-122.40728100000005",
  "37.73101599999999,-122.41108100000005",
  "37.73101599999999,-122.41488100000005",
  "37.73101599999999,-122.41868100000005",
  "37.73101599999999,-122.42248100000005",
  "37.73101599999999,-122.42628100000005",
  "37.73101599999999,-122.43008100000004",
  "37.73101599999999,-122.43388100000004",
  "37.73101599999999,-122.43768100000004",
  "37.73101599999999,-122.44148100000004",
  "37.73101599999999,-122.44528100000004",
  "37.73101599999999,-122.44908100000004",
  "37.73101599999999,-122.45288100000003",
  "37.73101599999999,-122.45668100000003",
  "37.73101599999999,-122.46048100000003",
  "37.73101599999999,-122.46428100000003",
  "37.73101599999999,-122.46808100000003",
  "37.73101599999999,-122.47188100000002",
  "37.73101599999999,-122.47568100000002",
  "37.73101599999999,-122.47948100000002",
  "37.73101599999999,-122.48328100000002",
  "37.73101599999999,-122.48708100000002",
  "37.73101599999999,-122.49088100000002",
  "37.73101599999999,-122.49468100000001",
  "37.73101599999999,-122.49848100000001",
  "37.73101599999999,-122.50228100000001",
  "37.73101599999999,-122.50608100000001",
  "37.73481599999999,-122.36928100000007",
  "37.73481599999999,-122.37308100000007",
  "37.73481599999999,-122.37688100000007",
  "37.73481599999999,-122.38068100000007",
  "37.73481599999999,-122.38448100000006",
  "37.73481599999999,-122.38828100000006",
  "37.73481599999999,-122.39208100000006",
  "37.73481599999999,-122.39588100000006",
  "37.73481599999999,-122.39968100000006",
  "37.73481599999999,-122.40348100000006",
  "37.73481599999999,-122.40728100000005",
  "37.73481599999999,-122.41108100000005",
  "37.73481599999999,-122.41488100000005",
  "37.73481599999999,-122.41868100000005",
  "37.73481599999999,-122.42248100000005",
  "37.73481599999999,-122.42628100000005",
  "37.73481599999999,-122.43008100000004",
  "37.73481599999999,-122.43388100000004",
  "37.73481599999999,-122.43768100000004",
  "37.73481599999999,-122.44148100000004",
  "37.73481599999999,-122.44528100000004",
  "37.73481599999999,-122.44908100000004",
  "37.73481599999999,-122.45288100000003",
  "37.73481599999999,-122.45668100000003",
  "37.73481599999999,-122.46048100000003",
  "37.73481599999999,-122.46428100000003",
  "37.73481599999999,-122.46808100000003",
  "37.73481599999999,-122.47188100000002",
  "37.73481599999999,-122.47568100000002",
  "37.73481599999999,-122.47948100000002",
  "37.73481599999999,-122.48328100000002",
  "37.73481599999999,-122.48708100000002",
  "37.73481599999999,-122.49088100000002",
  "37.73481599999999,-122.49468100000001",
  "37.73481599999999,-122.49848100000001",
  "37.73481599999999,-122.50228100000001",
  "37.73481599999999,-122.50608100000001",
  "37.738615999999986,-122.37308100000007",
  "37.738615999999986,-122.37688100000007",
  "37.738615999999986,-122.38068100000007",
  "37.738615999999986,-122.38448100000006",
  "37.738615999999986,-122.38828100000006",
  "37.738615999999986,-122.39208100000006",
  "37.738615999999986,-122.39588100000006",
  "37.738615999999986,-122.39968100000006",
  "37.738615999999986,-122.40348100000006",
  "37.738615999999986,-122.40728100000005",
  "37.738615999999986,-122.41108100000005",
  "37.738615999999986,-122.41488100000005",
  "37.738615999999986,-122.41868100000005",
  "37.738615999999986,-122.42248100000005",
  "37.738615999999986,-122.42628100000005",
  "37.738615999999986,-122.43008100000004",
  "37.738615999999986,-122.43388100000004",
  "37.738615999999986,-122.43768100000004",
  "37.738615999999986,-122.44148100000004",
  "37.738615999999986,-122.44528100000004",
  "37.738615999999986,-122.44908100000004",
  "37.738615999999986,-122.45288100000003",
  "37.738615999999986,-122.45668100000003",
  "37.738615999999986,-122.46048100000003",
  "37.738615999999986,-122.46428100000003",
  "37.738615999999986,-122.46808100000003",
  "37.738615999999986,-122.47188100000002",
  "37.738615999999986,-122.47568100000002",
  "37.738615999999986,-122.47948100000002",
  "37.738615999999986,-122.48328100000002",
  "37.738615999999986,-122.48708100000002",
  "37.738615999999986,-122.49088100000002",
  "37.738615999999986,-122.49468100000001",
  "37.738615999999986,-122.49848100000001",
  "37.738615999999986,-122.50228100000001",
  "37.738615999999986,-122.50608100000001",
  "37.742415999999984,-122.37688100000007",
  "37.742415999999984,-122.38068100000007",
  "37.742415999999984,-122.38448100000006",
  "37.742415999999984,-122.38828100000006",
  "37.742415999999984,-122.39208100000006",
  "37.742415999999984,-122.39588100000006",
  "37.742415999999984,-122.39968100000006",
  "37.742415999999984,-122.40348100000006",
  "37.742415999999984,-122.40728100000005",
  "37.742415999999984,-122.41108100000005",
  "37.742415999999984,-122.41488100000005",
  "37.742415999999984,-122.41868100000005",
  "37.742415999999984,-122.42248100000005",
  "37.742415999999984,-122.42628100000005",
  "37.742415999999984,-122.43008100000004",
  "37.742415999999984,-122.43388100000004",
  "37.742415999999984,-122.43768100000004",
  "37.742415999999984,-122.44148100000004",
  "37.742415999999984,-122.44528100000004",
  "37.742415999999984,-122.44908100000004",
  "37.742415999999984,-122.45288100000003",
  "37.742415999999984,-122.45668100000003",
  "37.742415999999984,-122.46048100000003",
  "37.742415999999984,-122.46428100000003",
  "37.742415999999984,-122.46808100000003",
  "37.742415999999984,-122.47188100000002",
  "37.742415999999984,-122.47568100000002",
  "37.742415999999984,-122.47948100000002",
  "37.742415999999984,-122.48328100000002",
  "37.742415999999984,-122.48708100000002",
  "37.742415999999984,-122.49088100000002",
  "37.742415999999984,-122.49468100000001",
  "37.742415999999984,-122.49848100000001",
  "37.742415999999984,-122.50228100000001",
  "37.742415999999984,-122.50608100000001",
  "37.74621599999998,-122.38448100000006",
  "37.74621599999998,-122.38828100000006",
  "37.74621599999998,-122.39208100000006",
  "37.74621599999998,-122.39588100000006",
  "37.74621599999998,-122.39968100000006",
  "37.74621599999998,-122.40348100000006",
  "37.74621599999998,-122.40728100000005",
  "37.74621599999998,-122.41108100000005",
  "37.74621599999998,-122.41488100000005",
  "37.74621599999998,-122.41868100000005",
  "37.74621599999998,-122.42248100000005",
  "37.74621599999998,-122.42628100000005",
  "37.74621599999998,-122.43008100000004",
  "37.74621599999998,-122.43388100000004",
  "37.74621599999998,-122.43768100000004",
  "37.74621599999998,-122.44148100000004",
  "37.74621599999998,-122.44528100000004",
  "37.74621599999998,-122.44908100000004",
  "37.74621599999998,-122.45288100000003",
  "37.74621599999998,-122.45668100000003",
  "37.74621599999998,-122.46048100000003",
  "37.74621599999998,-122.46428100000003",
  "37.74621599999998,-122.46808100000003",
  "37.74621599999998,-122.47188100000002",
  "37.74621599999998,-122.47568100000002",
  "37.74621599999998,-122.47948100000002",
  "37.74621599999998,-122.48328100000002",
  "37.74621599999998,-122.48708100000002",
  "37.74621599999998,-122.49088100000002",
  "37.74621599999998,-122.49468100000001",
  "37.74621599999998,-122.49848100000001",
  "37.74621599999998,-122.50228100000001",
  "37.74621599999998,-122.50608100000001",
  "37.74621599999998,-122.50988100000001",
  "37.75001599999998,-122.38828100000006",
  "37.75001599999998,-122.39208100000006",
  "37.75001599999998,-122.39588100000006",
  "37.75001599999998,-122.39968100000006",
  "37.75001599999998,-122.40348100000006",
  "37.75001599999998,-122.40728100000005",
  "37.75001599999998,-122.41108100000005",
  "37.75001599999998,-122.41488100000005",
  "37.75001599999998,-122.41868100000005",
  "37.75001599999998,-122.42248100000005",
  "37.75001599999998,-122.42628100000005",
  "37.75001599999998,-122.43008100000004",
  "37.75001599999998,-122.43388100000004",
  "37.75001599999998,-122.43768100000004",
  "37.75001599999998,-122.44148100000004",
  "37.75001599999998,-122.44528100000004",
  "37.75001599999998,-122.44908100000004",
  "37.75001599999998,-122.45288100000003",
  "37.75001599999998,-122.45668100000003",
  "37.75001599999998,-122.46048100000003",
  "37.75001599999998,-122.46428100000003",
  "37.75001599999998,-122.46808100000003",
  "37.75001599999998,-122.47188100000002",
  "37.75001599999998,-122.47568100000002",
  "37.75001599999998,-122.47948100000002",
  "37.75001599999998,-122.48328100000002",
  "37.75001599999998,-122.48708100000002",
  "37.75001599999998,-122.49088100000002",
  "37.75001599999998,-122.49468100000001",
  "37.75001599999998,-122.49848100000001",
  "37.75001599999998,-122.50228100000001",
  "37.75001599999998,-122.50608100000001",
  "37.75001599999998,-122.50988100000001",
  "37.75381599999998,-122.38828100000006",
  "37.75381599999998,-122.39208100000006",
  "37.75381599999998,-122.39588100000006",
  "37.75381599999998,-122.39968100000006",
  "37.75381599999998,-122.40348100000006",
  "37.75381599999998,-122.40728100000005",
  "37.75381599999998,-122.41108100000005",
  "37.75381599999998,-122.41488100000005",
  "37.75381599999998,-122.41868100000005",
  "37.75381599999998,-122.42248100000005",
  "37.75381599999998,-122.42628100000005",
  "37.75381599999998,-122.43008100000004",
  "37.75381599999998,-122.43388100000004",
  "37.75381599999998,-122.43768100000004",
  "37.75381599999998,-122.44148100000004",
  "37.75381599999998,-122.44528100000004",
  "37.75381599999998,-122.44908100000004",
  "37.75381599999998,-122.45288100000003",
  "37.75381599999998,-122.45668100000003",
  "37.75381599999998,-122.46048100000003",
  "37.75381599999998,-122.46428100000003",
  "37.75381599999998,-122.46808100000003",
  "37.75381599999998,-122.47188100000002",
  "37.75381599999998,-122.47568100000002",
  "37.75381599999998,-122.47948100000002",
  "37.75381599999998,-122.48328100000002",
  "37.75381599999998,-122.48708100000002",
  "37.75381599999998,-122.49088100000002",
  "37.75381599999998,-122.49468100000001",
  "37.75381599999998,-122.49848100000001",
  "37.75381599999998,-122.50228100000001",
  "37.75381599999998,-122.50608100000001",
  "37.75381599999998,-122.50988100000001",
  "37.75761599999998,-122.38828100000006",
  "37.75761599999998,-122.39208100000006",
  "37.75761599999998,-122.39588100000006",
  "37.75761599999998,-122.39968100000006",
  "37.75761599999998,-122.40348100000006",
  "37.75761599999998,-122.40728100000005",
  "37.75761599999998,-122.41108100000005",
  "37.75761599999998,-122.41488100000005",
  "37.75761599999998,-122.41868100000005",
  "37.75761599999998,-122.42248100000005",
  "37.75761599999998,-122.42628100000005",
  "37.75761599999998,-122.43008100000004",
  "37.75761599999998,-122.43388100000004",
  "37.75761599999998,-122.43768100000004",
  "37.75761599999998,-122.44148100000004",
  "37.75761599999998,-122.44528100000004",
  "37.75761599999998,-122.44908100000004",
  "37.75761599999998,-122.45288100000003",
  "37.75761599999998,-122.45668100000003",
  "37.75761599999998,-122.46048100000003",
  "37.75761599999998,-122.46428100000003",
  "37.75761599999998,-122.46808100000003",
  "37.75761599999998,-122.47188100000002",
  "37.75761599999998,-122.47568100000002",
  "37.75761599999998,-122.47948100000002",
  "37.75761599999998,-122.48328100000002",
  "37.75761599999998,-122.48708100000002",
  "37.75761599999998,-122.49088100000002",
  "37.75761599999998,-122.49468100000001",
  "37.75761599999998,-122.49848100000001",
  "37.75761599999998,-122.50228100000001",
  "37.75761599999998,-122.50608100000001",
  "37.75761599999998,-122.50988100000001",
  "37.761415999999976,-122.38828100000006",
  "37.761415999999976,-122.39208100000006",
  "37.761415999999976,-122.39588100000006",
  "37.761415999999976,-122.39968100000006",
  "37.761415999999976,-122.40348100000006",
  "37.761415999999976,-122.40728100000005",
  "37.761415999999976,-122.41108100000005",
  "37.761415999999976,-122.41488100000005",
  "37.761415999999976,-122.41868100000005",
  "37.761415999999976,-122.42248100000005",
  "37.761415999999976,-122.42628100000005",
  "37.761415999999976,-122.43008100000004",
  "37.761415999999976,-122.43388100000004",
  "37.761415999999976,-122.43768100000004",
  "37.761415999999976,-122.44148100000004",
  "37.761415999999976,-122.44528100000004",
  "37.761415999999976,-122.44908100000004",
  "37.761415999999976,-122.45288100000003",
  "37.761415999999976,-122.45668100000003",
  "37.761415999999976,-122.46048100000003",
  "37.761415999999976,-122.46428100000003",
  "37.761415999999976,-122.46808100000003",
  "37.761415999999976,-122.47188100000002",
  "37.761415999999976,-122.47568100000002",
  "37.761415999999976,-122.47948100000002",
  "37.761415999999976,-122.48328100000002",
  "37.761415999999976,-122.48708100000002",
  "37.761415999999976,-122.49088100000002",
  "37.761415999999976,-122.49468100000001",
  "37.761415999999976,-122.49848100000001",
  "37.761415999999976,-122.50228100000001",
  "37.761415999999976,-122.50608100000001",
  "37.761415999999976,-122.50988100000001",
  "37.765215999999974,-122.38828100000006",
  "37.765215999999974,-122.39208100000006",
  "37.765215999999974,-122.39588100000006",
  "37.765215999999974,-122.39968100000006",
  "37.765215999999974,-122.40348100000006",
  "37.765215999999974,-122.40728100000005",
  "37.765215999999974,-122.41108100000005",
  "37.765215999999974,-122.41488100000005",
  "37.765215999999974,-122.41868100000005",
  "37.765215999999974,-122.42248100000005",
  "37.765215999999974,-122.42628100000005",
  "37.765215999999974,-122.43008100000004",
  "37.765215999999974,-122.43388100000004",
  "37.765215999999974,-122.43768100000004",
  "37.765215999999974,-122.44148100000004",
  "37.765215999999974,-122.44528100000004",
  "37.765215999999974,-122.44908100000004",
  "37.765215999999974,-122.45288100000003",
  "37.765215999999974,-122.45668100000003",
  "37.765215999999974,-122.46048100000003",
  "37.765215999999974,-122.46428100000003",
  "37.765215999999974,-122.46808100000003",
  "37.765215999999974,-122.47188100000002",
  "37.765215999999974,-122.47568100000002",
  "37.765215999999974,-122.47948100000002",
  "37.765215999999974,-122.48328100000002",
  "37.765215999999974,-122.48708100000002",
  "37.765215999999974,-122.49088100000002",
  "37.765215999999974,-122.49468100000001",
  "37.765215999999974,-122.49848100000001",
  "37.765215999999974,-122.50228100000001",
  "37.765215999999974,-122.50608100000001",
  "37.765215999999974,-122.50988100000001",
  "37.76901599999997,-122.38828100000006",
  "37.76901599999997,-122.39208100000006",
  "37.76901599999997,-122.39588100000006",
  "37.76901599999997,-122.39968100000006",
  "37.76901599999997,-122.40348100000006",
  "37.76901599999997,-122.40728100000005",
  "37.76901599999997,-122.41108100000005",
  "37.76901599999997,-122.41488100000005",
  "37.76901599999997,-122.41868100000005",
  "37.76901599999997,-122.42248100000005",
  "37.76901599999997,-122.42628100000005",
  "37.76901599999997,-122.43008100000004",
  "37.76901599999997,-122.43388100000004",
  "37.76901599999997,-122.43768100000004",
  "37.76901599999997,-122.44148100000004",
  "37.76901599999997,-122.44528100000004",
  "37.76901599999997,-122.44908100000004",
  "37.76901599999997,-122.45288100000003",
  "37.76901599999997,-122.45668100000003",
  "37.76901599999997,-122.46048100000003",
  "37.76901599999997,-122.46428100000003",
  "37.76901599999997,-122.46808100000003",
  "37.76901599999997,-122.47188100000002",
  "37.76901599999997,-122.47568100000002",
  "37.76901599999997,-122.47948100000002",
  "37.76901599999997,-122.48328100000002",
  "37.76901599999997,-122.48708100000002",
  "37.76901599999997,-122.49088100000002",
  "37.76901599999997,-122.49468100000001",
  "37.76901599999997,-122.49848100000001",
  "37.76901599999997,-122.50228100000001",
  "37.76901599999997,-122.50608100000001",
  "37.76901599999997,-122.50988100000001",
  "37.77281599999997,-122.38828100000006",
  "37.77281599999997,-122.39208100000006",
  "37.77281599999997,-122.39588100000006",
  "37.77281599999997,-122.39968100000006",
  "37.77281599999997,-122.40348100000006",
  "37.77281599999997,-122.40728100000005",
  "37.77281599999997,-122.41108100000005",
  "37.77281599999997,-122.41488100000005",
  "37.77281599999997,-122.41868100000005",
  "37.77281599999997,-122.42248100000005",
  "37.77281599999997,-122.42628100000005",
  "37.77281599999997,-122.43008100000004",
  "37.77281599999997,-122.43388100000004",
  "37.77281599999997,-122.43768100000004",
  "37.77281599999997,-122.44148100000004",
  "37.77281599999997,-122.44528100000004",
  "37.77281599999997,-122.44908100000004",
  "37.77281599999997,-122.45288100000003",
  "37.77281599999997,-122.45668100000003",
  "37.77281599999997,-122.46048100000003",
  "37.77281599999997,-122.46428100000003",
  "37.77281599999997,-122.46808100000003",
  "37.77281599999997,-122.47188100000002",
  "37.77281599999997,-122.47568100000002",
  "37.77281599999997,-122.47948100000002",
  "37.77281599999997,-122.48328100000002",
  "37.77281599999997,-122.48708100000002",
  "37.77281599999997,-122.49088100000002",
  "37.77281599999997,-122.49468100000001",
  "37.77281599999997,-122.49848100000001",
  "37.77281599999997,-122.50228100000001",
  "37.77281599999997,-122.50608100000001",
  "37.77281599999997,-122.50988100000001",
  "37.77661599999997,-122.38828100000006",
  "37.77661599999997,-122.39208100000006",
  "37.77661599999997,-122.39588100000006",
  "37.77661599999997,-122.39968100000006",
  "37.77661599999997,-122.40348100000006",
  "37.77661599999997,-122.40728100000005",
  "37.77661599999997,-122.41108100000005",
  "37.77661599999997,-122.41488100000005",
  "37.77661599999997,-122.41868100000005",
  "37.77661599999997,-122.42248100000005",
  "37.77661599999997,-122.42628100000005",
  "37.77661599999997,-122.43008100000004",
  "37.77661599999997,-122.43388100000004",
  "37.77661599999997,-122.43768100000004",
  "37.77661599999997,-122.44148100000004",
  "37.77661599999997,-122.44528100000004",
  "37.77661599999997,-122.44908100000004",
  "37.77661599999997,-122.45288100000003",
  "37.77661599999997,-122.45668100000003",
  "37.77661599999997,-122.46048100000003",
  "37.77661599999997,-122.46428100000003",
  "37.77661599999997,-122.46808100000003",
  "37.77661599999997,-122.47188100000002",
  "37.77661599999997,-122.47568100000002",
  "37.77661599999997,-122.47948100000002",
  "37.77661599999997,-122.48328100000002",
  "37.77661599999997,-122.48708100000002",
  "37.77661599999997,-122.49088100000002",
  "37.77661599999997,-122.49468100000001",
  "37.77661599999997,-122.49848100000001",
  "37.77661599999997,-122.50228100000001",
  "37.77661599999997,-122.50608100000001",
  "37.77661599999997,-122.50988100000001",
  "37.78041599999997,-122.38828100000006",
  "37.78041599999997,-122.39208100000006",
  "37.78041599999997,-122.39588100000006",
  "37.78041599999997,-122.39968100000006",
  "37.78041599999997,-122.40348100000006",
  "37.78041599999997,-122.40728100000005",
  "37.78041599999997,-122.41108100000005",
  "37.78041599999997,-122.41488100000005",
  "37.78041599999997,-122.41868100000005",
  "37.78041599999997,-122.42248100000005",
  "37.78041599999997,-122.42628100000005",
  "37.78041599999997,-122.43008100000004",
  "37.78041599999997,-122.43388100000004",
  "37.78041599999997,-122.43768100000004",
  "37.78041599999997,-122.44148100000004",
  "37.78041599999997,-122.44528100000004",
  "37.78041599999997,-122.44908100000004",
  "37.78041599999997,-122.45288100000003",
  "37.78041599999997,-122.45668100000003",
  "37.78041599999997,-122.46048100000003",
  "37.78041599999997,-122.46428100000003",
  "37.78041599999997,-122.46808100000003",
  "37.78041599999997,-122.47188100000002",
  "37.78041599999997,-122.47568100000002",
  "37.78041599999997,-122.47948100000002",
  "37.78041599999997,-122.48328100000002",
  "37.78041599999997,-122.48708100000002",
  "37.78041599999997,-122.49088100000002",
  "37.78041599999997,-122.49468100000001",
  "37.78041599999997,-122.49848100000001",
  "37.78041599999997,-122.50228100000001",
  "37.78041599999997,-122.50608100000001",
  "37.78041599999997,-122.50988100000001",
  "37.784215999999965,-122.38828100000006",
  "37.784215999999965,-122.39208100000006",
  "37.784215999999965,-122.39588100000006",
  "37.784215999999965,-122.39968100000006",
  "37.784215999999965,-122.40348100000006",
  "37.784215999999965,-122.40728100000005",
  "37.784215999999965,-122.41108100000005",
  "37.784215999999965,-122.41488100000005",
  "37.784215999999965,-122.41868100000005",
  "37.784215999999965,-122.42248100000005",
  "37.784215999999965,-122.42628100000005",
  "37.784215999999965,-122.43008100000004",
  "37.784215999999965,-122.43388100000004",
  "37.784215999999965,-122.43768100000004",
  "37.784215999999965,-122.44148100000004",
  "37.784215999999965,-122.44528100000004",
  "37.784215999999965,-122.44908100000004",
  "37.784215999999965,-122.45288100000003",
  "37.784215999999965,-122.45668100000003",
  "37.784215999999965,-122.46048100000003",
  "37.784215999999965,-122.46428100000003",
  "37.784215999999965,-122.46808100000003",
  "37.784215999999965,-122.47188100000002",
  "37.784215999999965,-122.47568100000002",
  "37.784215999999965,-122.47948100000002",
  "37.784215999999965,-122.48328100000002",
  "37.784215999999965,-122.48708100000002",
  "37.784215999999965,-122.49088100000002",
  "37.784215999999965,-122.49468100000001",
  "37.784215999999965,-122.49848100000001",
  "37.784215999999965,-122.50228100000001",
  "37.784215999999965,-122.50608100000001",
  "37.78801599999996,-122.38828100000006",
  "37.78801599999996,-122.39208100000006",
  "37.78801599999996,-122.39588100000006",
  "37.78801599999996,-122.39968100000006",
  "37.78801599999996,-122.40348100000006",
  "37.78801599999996,-122.40728100000005",
  "37.78801599999996,-122.41108100000005",
  "37.78801599999996,-122.41488100000005",
  "37.78801599999996,-122.41868100000005",
  "37.78801599999996,-122.42248100000005",
  "37.78801599999996,-122.42628100000005",
  "37.78801599999996,-122.43008100000004",
  "37.78801599999996,-122.43388100000004",
  "37.78801599999996,-122.43768100000004",
  "37.78801599999996,-122.44148100000004",
  "37.78801599999996,-122.44528100000004",
  "37.78801599999996,-122.44908100000004",
  "37.78801599999996,-122.45288100000003",
  "37.78801599999996,-122.45668100000003",
  "37.78801599999996,-122.46048100000003",
  "37.78801599999996,-122.46428100000003",
  "37.78801599999996,-122.46808100000003",
  "37.78801599999996,-122.47188100000002",
  "37.78801599999996,-122.47568100000002",
  "37.78801599999996,-122.47948100000002",
  "37.78801599999996,-122.48328100000002",
  "37.78801599999996,-122.48708100000002",
  "37.78801599999996,-122.49088100000002",
  "37.79181599999996,-122.38828100000006",
  "37.79181599999996,-122.39208100000006",
  "37.79181599999996,-122.39588100000006",
  "37.79181599999996,-122.39968100000006",
  "37.79181599999996,-122.40348100000006",
  "37.79181599999996,-122.40728100000005",
  "37.79181599999996,-122.41108100000005",
  "37.79181599999996,-122.41488100000005",
  "37.79181599999996,-122.41868100000005",
  "37.79181599999996,-122.42248100000005",
  "37.79181599999996,-122.42628100000005",
  "37.79181599999996,-122.43008100000004",
  "37.79181599999996,-122.43388100000004",
  "37.79181599999996,-122.43768100000004",
  "37.79181599999996,-122.44148100000004",
  "37.79181599999996,-122.44528100000004",
  "37.79181599999996,-122.44908100000004",
  "37.79181599999996,-122.45288100000003",
  "37.79181599999996,-122.45668100000003",
  "37.79181599999996,-122.46048100000003",
  "37.79181599999996,-122.46428100000003",
  "37.79181599999996,-122.46808100000003",
  "37.79181599999996,-122.47188100000002",
  "37.79181599999996,-122.47568100000002",
  "37.79181599999996,-122.47948100000002",
  "37.79181599999996,-122.48328100000002",
  "37.79181599999996,-122.48708100000002",
  "37.79561599999996,-122.39588100000006",
  "37.79561599999996,-122.39968100000006",
  "37.79561599999996,-122.40348100000006",
  "37.79561599999996,-122.40728100000005",
  "37.79561599999996,-122.41108100000005",
  "37.79561599999996,-122.41488100000005",
  "37.79561599999996,-122.41868100000005",
  "37.79561599999996,-122.42248100000005",
  "37.79561599999996,-122.42628100000005",
  "37.79561599999996,-122.43008100000004",
  "37.79561599999996,-122.43388100000004",
  "37.79561599999996,-122.43768100000004",
  "37.79561599999996,-122.44148100000004",
  "37.79561599999996,-122.44528100000004",
  "37.79561599999996,-122.44908100000004",
  "37.79561599999996,-122.45288100000003",
  "37.79561599999996,-122.45668100000003",
  "37.79561599999996,-122.46048100000003",
  "37.79561599999996,-122.46428100000003",
  "37.79561599999996,-122.46808100000003",
  "37.79561599999996,-122.47188100000002",
  "37.79561599999996,-122.47568100000002",
  "37.79561599999996,-122.47948100000002",
  "37.79561599999996,-122.48328100000002",
  "37.79941599999996,-122.39968100000006",
  "37.79941599999996,-122.40348100000006",
  "37.79941599999996,-122.40728100000005",
  "37.79941599999996,-122.41108100000005",
  "37.79941599999996,-122.41488100000005",
  "37.79941599999996,-122.41868100000005",
  "37.79941599999996,-122.42248100000005",
  "37.79941599999996,-122.42628100000005",
  "37.79941599999996,-122.43008100000004",
  "37.79941599999996,-122.43388100000004",
  "37.79941599999996,-122.43768100000004",
  "37.79941599999996,-122.44148100000004",
  "37.79941599999996,-122.44528100000004",
  "37.79941599999996,-122.44908100000004",
  "37.79941599999996,-122.45288100000003",
  "37.79941599999996,-122.45668100000003",
  "37.79941599999996,-122.46048100000003",
  "37.79941599999996,-122.46428100000003",
  "37.79941599999996,-122.46808100000003",
  "37.79941599999996,-122.47188100000002",
  "37.79941599999996,-122.47568100000002",
  "37.79941599999996,-122.47948100000002",
  "37.79941599999996,-122.48328100000002",
  "37.803215999999956,-122.40348100000006",
  "37.803215999999956,-122.40728100000005",
  "37.803215999999956,-122.41108100000005",
  "37.803215999999956,-122.41488100000005",
  "37.803215999999956,-122.41868100000005",
  "37.803215999999956,-122.42248100000005",
  "37.803215999999956,-122.42628100000005",
  "37.803215999999956,-122.43008100000004",
  "37.803215999999956,-122.43388100000004",
  "37.803215999999956,-122.43768100000004",
  "37.803215999999956,-122.44148100000004",
  "37.803215999999956,-122.44528100000004",
  "37.803215999999956,-122.44908100000004",
  "37.803215999999956,-122.45288100000003",
  "37.803215999999956,-122.45668100000003",
  "37.803215999999956,-122.46048100000003",
  "37.803215999999956,-122.46428100000003",
  "37.803215999999956,-122.46808100000003",
  "37.803215999999956,-122.47188100000002",
  "37.803215999999956,-122.47568100000002",
  "37.803215999999956,-122.47948100000002",
  "37.807015999999955,-122.41108100000005",
  "37.807015999999955,-122.41488100000005",
  "37.807015999999955,-122.41868100000005",
  "37.807015999999955,-122.42248100000005",
  "37.807015999999955,-122.42628100000005",
  "37.807015999999955,-122.43008100000004",
  "37.807015999999955,-122.43388100000004",
  "37.807015999999955,-122.43768100000004",
  "37.807015999999955,-122.44148100000004",
  "37.807015999999955,-122.44528100000004",
  "37.807015999999955,-122.44908100000004",
  "37.807015999999955,-122.45288100000003",
  "37.807015999999955,-122.45668100000003",
  "37.807015999999955,-122.46048100000003",
  "37.807015999999955,-122.46428100000003",
  "37.807015999999955,-122.46808100000003",
  "37.807015999999955,-122.47188100000002",
  "37.807015999999955,-122.47568100000002",
  "37.807015999999955,-122.47948100000002",
]

export default function MapBox({ markers, layers }) {
  const [popupInfo, setPopupInfo] = React.useState(null);
  const [generators, setGenerators] = React.useState([]);
  const [zones, setZones] = React.useState([]);

  const [mapLayers, setMapLayers] = React.useState([])

  const getPlants = async () => {
    const res = await fetch("/api/plants");
    const data = await res.json();
    setGenerators(data.generators);
  };

  const getZones = async () => {
    const res = await fetch("/api/zones");
    const data = await res.json();
    setZones(data.zones);
  };

  React.useEffect(() => {
    getPlants();
    getZones();
  }, []);

  const handleMapClick = (e) => {
    let clickedLatLong = e['lngLat']
    let clickedLat = clickedLatLong['lng']
    let clickedLong = clickedLatLong['lat']
    // find the point in the array that is closest to the clicked point
    let closestPoint = validPoints.reduce(function(prev, curr) {
      let prevLat = prev.split(',')[1]
      let prevLong = prev.split(',')[0]
      let currLat = curr.split(',')[1]
      let currLong = curr.split(',')[0]
      let prevDistance = Math.sqrt(Math.pow(clickedLat - prevLat, 2) + Math.pow(clickedLong - prevLong, 2))
      let currDistance = Math.sqrt(Math.pow(clickedLat - currLat, 2) + Math.pow(clickedLong - currLong, 2))
      return (prevDistance < currDistance) ? prev : curr
    })
    // show the closest point on the map
    let closestPointLat = closestPoint.split(',')[0]
    let closestPointLong = closestPoint.split(',')[1]
    let closestPointIndexInValidPoints = validPoints.indexOf(closestPoint)
    if (mapLayers.length > 0) {
      setMapLayers([])
      return
    }
    setMapLayers([
      // SF Matrix Text
      {
        // to do-string and round on TravelTime to get text
        name: "SF Matrix",
        source: {
          id: `${closestPointIndexInValidPoints}_tileset`,
          type: "vector",
          url: `mapbox://connorhogan.${closestPointIndexInValidPoints}_tileset`,
        },
        layer: {
          id: `${closestPointIndexInValidPoints}_tileset`,
          type: "symbol",
          source: `${closestPointIndexInValidPoints}_tileset`,
          "source-layer": `${closestPointLat}_${closestPointLong}`,
          layout: {
            "text-field": ["to-string", ["round", ["get", "TravelTime"]]],
            "text-size": 12,
            "text-offset": [0, 1.25],
            "text-anchor": "top",
          },
          paint: {
            "text-color": [
              "interpolate",
              ["linear"],
              ["get", "TravelTime"],
              11.49595,
              "rgba(0, 194, 36, 0.86)",
              59.99,
              "rgba(255, 46, 67, 0.52)",
              60,
              "rgba(0, 0, 0, 0)"
            ],
            "text-halo-color": [
              "interpolate",
              ["linear"],
              ["get", "TravelTime"],
              11.49595,
              "rgba(0, 194, 36, 0.86)",
              59.99,
              "rgba(255, 46, 67, 0.52)",
              60,
              "rgba(0, 0, 0, 0)"
            ],
            "text-halo-width": 0.4,
          },
        }
      }
    ])
    
  };

  return (
    <Map
      initialViewState={{
        longitude: -122.450,
        latitude: 37.77241,
        zoom: 12
      }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/connorhogan/clokqilzw001y01rhciyhas0z"
      attributionControl={false}
      logoPosition="bottom-right"
      onClick={handleMapClick}
    >

    {mapLayers.map(layer => {  
        if (true) {
      return (
      <Source {...layer.source} key={layer.name}>
          <Layer {...layer.layer} />
        </Source>
        )}
      }
      )}

      <PopupInfo popupInfo={popupInfo} setPopupInfo={setPopupInfo} setZones={setZones} />
      
    </Map>
  );
}
