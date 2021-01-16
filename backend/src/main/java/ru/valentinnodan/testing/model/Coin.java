package ru.valentinnodan.testing.model;

public class Coin {
    public Coin() {

    }
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public String getValue() {
        return value;
    }

    String date;

    public void setName(String name) {
        this.name = name;
    }

    public void setValue(String value) {
        this.value = value;
    }

    String name;
    String value;
    public Coin(String date, String name, String value) {
        this.date = date;
        this.name = name;
        this.value = value;
    }
}
